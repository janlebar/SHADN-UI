import fetch from 'node-fetch';
import { promises as fs } from 'fs';

interface SearchResult {
    url: string;
    title: string;
}

interface FetchSearchResultsResponse {
    results: SearchResult[];
}

async function fetchSearchResults(query: string): Promise<string> {
    const url = 'https://searxng-1o3d.onrender.com/';
    const params = new URLSearchParams({ q: query, format: 'json' });

    try {
        const response = await fetch(`${url}?${params.toString()}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const results: FetchSearchResultsResponse = await response.json() as any;
        
        const formattedResults = results.results.map((result, idx) => {
            return `${idx + 1},${result.url},${result.title}\n`;
        }).join('');

        const payload = {
            stream: false,
            model: "llama2",
            prompt: `Given the following query "${query}" and the following results (CSV of id,url,title):
            \`\`\`
            ${formattedResults}
            \`\`\`
            Respond ONLY with a CSV with columns URL and assessed relevance (numeric relevance for query from 1 to 10, 10 representing highest score).`
        };

        const headers = { 'Content-Type': 'application/json' };

        const postResponse = await fetch('https://a2c93c98c9d0c56157ac8377-ollama.x-truder.net/api/generate', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!postResponse.ok) throw new Error(`HTTP error! status: ${postResponse.status}`);

        const responseJson = await postResponse.json() as any;
        const responseIndex = Object.keys(responseJson).indexOf("response");
        const newResponseJson = Object.fromEntries(Object.entries(responseJson).slice(0, responseIndex + 1));
        const modifiedJson = JSON.stringify(newResponseJson, null, 2);

        console.log('Response from server:', modifiedJson);
        return modifiedJson;

    } catch (error) {
        console.error(`Error: ${error.message}`);
        return `Error: ${error.message}`;
    }
}

async function saveToFile(data: string, filename = 'search_results.txt'): Promise<void> {
    try {
        await fs.writeFile(filename, data, 'utf8');
        console.log(`Data saved to file ${filename}`);
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
}

(async () => {
    const query = 'coffee';
    const searchResults = await fetchSearchResults(query);

    // Save the results to a file
    await saveToFile(searchResults, 'search_results.txt');
})();

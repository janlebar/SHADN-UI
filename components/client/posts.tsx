// import React from 'react';

// interface Post {
//   id: number;
//   title: string;
//   content: string;
// }

// interface PostsProps {
//   posts: Post[];
// }

// const Posts: React.FC<PostsProps> = ({ posts }) => {
// //   return (
// //     <div>
// //       <h1>Posts</h1>
// //       <ul>
// //         {posts.map(post => (
// //           <li key={post.id}>
// //             <h2>{post.title}</h2>
// //             <p>{post.content}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// };

// export default Posts;


import React from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Category: {post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

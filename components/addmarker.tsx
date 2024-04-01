import { useEffect, useRef } from 'react';
import L from 'leaflet';

interface AddMarkerProps {
  map: L.Map;
}

const AddMarker: React.FC<AddMarkerProps> = ({ map }) => {
  const clickedLatitudeRef = useRef<number | null>(null);
  const clickedLongitudeRef = useRef<number | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    const addOrReplaceMarker = (e: L.LeafletMouseEvent) => {
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      markerRef.current = L.marker(e.latlng).addTo(map);
      markerRef.current.bindPopup('Marker at Clicked Location');

      clickedLatitudeRef.current = e.latlng.lat;
      clickedLongitudeRef.current = e.latlng.lng;

      handleMarkerChange(clickedLatitudeRef.current, clickedLongitudeRef.current);
    };

    const handleMarkerChange = (latitude: number, longitude: number) => {
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      // You can dispatch latitude and longitude to your API here

      // For demonstration, I'll just console.log the data
      fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    map.on('click', addOrReplaceMarker);

    return () => {
      map.off('click', addOrReplaceMarker);
    };
  }, [map]);

  return null; // Component doesn't render anything
};

export default AddMarker;

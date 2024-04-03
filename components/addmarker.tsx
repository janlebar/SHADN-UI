import { useEffect } from 'react';
import L from 'leaflet';

const AddMarker = ({ map }) => {
  useEffect(() => {
    if (map) {
      const addOrReplaceMarker = (e) => {
        if (marker) {
          map.removeLayer(marker);
        }

        marker = L.marker(e.latlng).addTo(map);
        marker.bindPopup("Marker at Clicked Location");

        const clickedLatitude = e.latlng.lat;
        const clickedLongitude = e.latlng.lng;

        handleMarkerChange(clickedLatitude, clickedLongitude);
      }

      map.on('click', addOrReplaceMarker);

      return () => {
        map.off('click', addOrReplaceMarker);
      };
    }
  }, [map]);

  let marker = null;

  function handleMarkerChange(latitude, longitude) {
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    
    // Update the HTML form with latitude and longitude
    document.getElementById("latitude").value = latitude;
    document.getElementById("longitude").value = longitude;

    // Dispatch a custom event with latitude and longitude
    const locationEvent = new CustomEvent("locationUpdate", {
      detail: { latitude, longitude },
    });
    document.dispatchEvent(locationEvent);
  }

  return null; // This component doesn't render anything directly
}

export default AddMarker;


import { useEffect } from 'react';

const LocationComponent: React.FC = () => {
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const locationEvent = new CustomEvent('userLocation', {
              detail: { latitude, longitude },
            });
            window.dispatchEvent(locationEvent);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return null; // This component doesn't render anything
};

export default LocationComponent;

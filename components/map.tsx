"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import React, { useState, useEffect } from 'react';
import LocationComponent from './location'; // Update the path as per your project structure



export default function Map() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const handleUserLocation = (event) => {
      const { latitude, longitude } = event.detail;
      setUserLocation({ latitude, longitude });
    };

    window.addEventListener('userLocation', handleUserLocation);

    return () => {
      window.removeEventListener('userLocation', handleUserLocation);
    };
  }, []);

  return (
    <div>
      <LocationComponent />
      {userLocation && (
        <MapContainer
          preferCanvas={true}
          center={[userLocation.latitude, userLocation.longitude]}
          zoom={11}
          scrollWheelZoom={true}
          style={{ height: '400px', width: '600px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[userLocation.latitude, userLocation.longitude]}>
            <Popup>
              This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const LeafletMap = dynamic(() => import('react-leaflet'), { ssr: false });
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMapComponent = () => {
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]); // Default center
  const [zoom, setZoom] = useState<number>(13); // Default zoom level

  useEffect(() => {
    // Fetch or calculate the coordinates you want to center the map on
  }, []);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const MyComponentPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Component Page</title>
        <meta name="description" content="Component Page with Leaflet map and card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold my-4">Component Page</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="font-semibold mb-4">Map</div>
          <div className="h-96">
            <MyMapComponent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyComponentPage;

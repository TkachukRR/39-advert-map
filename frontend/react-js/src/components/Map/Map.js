import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { mapSettings } from '../../settings';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function Map({ markers }) {
  const mapRef = useRef();

  useEffect(() => {
    if (markers?.length) {
      const newBounds = L.latLngBounds(markers);
      mapRef?.current?.flyToBounds(newBounds);
    }
  }, [markers]);

  return (
    <MapContainer
      center={mapSettings.center}
      zoom={mapSettings.zoom}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { mapSettings } from '../../settings';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function Map({ markers, updateVisibleMarkers }) {
  const mapRef = useRef();

  const customIcon = new L.Icon({
    iconUrl: './images/pin.svg',
    iconSize: [32, 32],
  });

  useEffect(() => {
    if (markers?.length) {
      const newBounds = L.latLngBounds(markers);
      mapRef?.current?.flyToBounds(newBounds);

      const handleMoveEnd = () => {
        const visibleMarkers = markers.filter((marker) =>
          mapRef?.current?.getBounds().contains(marker),
        );

        updateVisibleMarkers(visibleMarkers);
      };

      mapRef?.current?.addEventListener('moveend', handleMoveEnd);

      return () => {
        mapRef?.current?.removeEventListener('moveend', handleMoveEnd);
      };
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

      {markers.map((marker, index) => (
        <Marker position={marker} key={index} icon={customIcon}></Marker>
      ))}
    </MapContainer>
  );
}

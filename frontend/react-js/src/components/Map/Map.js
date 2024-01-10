import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { mapSettings } from '../../settings';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

export default function Map({
  adverts,
  updateVisibleAdverts,
  updateActiveAdvertId,
}) {
  const mapRef = useRef();
  const [markersPositions, setMarkersPositions] = useState(null);
  const [activeMarkerCoordinates, setActiveMarkerCoordinates] = useState([]);

  const icon = new L.Icon({
    iconUrl: './images/pin.svg',
    iconSize: [32, 32],
  });

  const iconActive = new L.Icon({
    iconUrl: './images/pin-active.svg',
    iconSize: [32, 32],
  });

  useEffect(() => {
    if (adverts?.length) {
      const newMarkers = adverts.map((advert) => advert.coordinates);
      setMarkersPositions(newMarkers);
      const newBounds = L.latLngBounds(newMarkers);
      mapRef?.current?.flyToBounds(newBounds);

      const handleMoveEnd = () => {
        const visibleMarkers = newMarkers.filter((marker) =>
          mapRef?.current?.getBounds().contains(marker),
        );

        updateVisibleAdverts(visibleMarkers);
      };

      mapRef?.current?.addEventListener('moveend', handleMoveEnd);

      return () => {
        mapRef?.current?.removeEventListener('moveend', handleMoveEnd);
      };
    }
  }, [adverts]);

  const handleMarkerClick = (position) => {
    setActiveMarkerCoordinates(position);
    updateActiveAdvertId(position);
  };

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

      {markersPositions?.length &&
        markersPositions.map((position, index) => (
          <Marker
            position={position}
            icon={
              position[0] === activeMarkerCoordinates[0] &&
              position[1] === activeMarkerCoordinates[1]
                ? iconActive
                : icon
            }
            key={index}
            eventHandlers={{ click: () => handleMarkerClick(position) }}
          />
        ))}
    </MapContainer>
  );
}

import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { mapSettings } from '../../settings';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function Map({
  adverts,
  updateVisibleAdverts,
  updateActiveAdvertId,
}) {
  const mapRef = useRef();

  const customIcon = new L.Icon({
    iconUrl: './images/pin.svg',
    iconSize: [32, 32],
  });

  useEffect(() => {
    if (adverts?.length) {
      const newMarkers = adverts.map((advert) => advert.coordinates);
      const newBounds = L.latLngBounds(newMarkers);
      mapRef?.current?.flyToBounds(newBounds);

      newMarkers.forEach((markerCoordinates, index) => {
        const newMarker = L.marker(markerCoordinates, {
          icon: customIcon,
        }).addTo(mapRef?.current);

        newMarker.addEventListener('click', () =>
          updateActiveAdvertId([
            newMarker.getLatLng().lat,
            newMarker.getLatLng().lng,
          ]),
        );
      });

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

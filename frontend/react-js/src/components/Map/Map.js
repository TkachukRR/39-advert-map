import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { mapSettings } from '../../settings';
import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import MapMarker from '../MapMarker/MapMarker';

export default function Map({
  advertisements,
  visibleAdvertisements,
  setVisibleAdvertisements,
  setSelectedAdvertisement,
  selectedAdvertisement,
}) {
  const mapRef = useRef(null);
  const [markersPositions, setMarkersPositions] = useState(null);
  const [visibleMarkersPositions, setVisibleMarkersPositions] = useState(null);
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);

  useEffect(() => {
    if (advertisements?.length) {
      const map = mapRef.current;
      const newMarkers = advertisements.map(
        (advertisement) => advertisement.coordinates,
      );
      const newBounds = L.latLngBounds(newMarkers);

      setMarkersPositions(newMarkers);
      map.flyToBounds(newBounds);
    }
  }, [advertisements, mapRef]);

  useEffect(() => {
    if (selectedMarkerPosition) {
      const newSelectedAdvertisement = visibleAdvertisements.filter(
        (advert) =>
          advert.coordinates[0] === selectedMarkerPosition[0] &&
          advert.coordinates[1] === selectedMarkerPosition[1],
      );
      setSelectedAdvertisement(...newSelectedAdvertisement);
    }
  }, [selectedMarkerPosition]);

  useEffect(() => {
    if (selectedAdvertisement) {
      setSelectedMarkerPosition(selectedAdvertisement.coordinates);
    }
  }, [selectedAdvertisement]);

  useEffect(() => {
    if (visibleMarkersPositions) {
      const newVisibleAdvertisements = advertisements.filter((advert) =>
        visibleMarkersPositions.some(
          (marker) =>
            advert.coordinates[0] === marker[0] &&
            advert.coordinates[1] === marker[1],
        ),
      );

      setVisibleAdvertisements(newVisibleAdvertisements);
    }
  }, [visibleMarkersPositions]);

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
      {markersPositions?.length && (
        <MapMarker
          markersPositions={markersPositions}
          visibleMarkersPositions={visibleMarkersPositions}
          selectedMarkerPosition={selectedMarkerPosition}
          setSelectedMarkerPosition={setSelectedMarkerPosition}
          setVisibleMarkersPositions={setVisibleMarkersPositions}
        />
      )}
    </MapContainer>
  );
}

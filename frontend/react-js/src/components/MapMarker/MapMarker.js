import L from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';

export default function MapMarker({
  markersPositions,
  selectedMarkerPosition,
  setSelectedMarkerPosition,
  setVisibleMarkersPositions,
}) {
  const map = useMapEvents({
    moveend() {
      const visibleMarkersPositions = markersPositions.filter((marker) =>
        map.getBounds().contains(marker),
      );
      setVisibleMarkersPositions(visibleMarkersPositions);
    },
  });

  const icon = new L.Icon({
    iconUrl: './images/pin.svg',
    iconSize: [32, 32],
  });

  const iconActive = new L.Icon({
    iconUrl: './images/pin-active.svg',
    iconSize: [32, 32],
  });

  const handleMarkerClick = (position) => {
    setSelectedMarkerPosition(position);
  };

  return (
    <>
      {markersPositions.map((position, index) => (
        <Marker
          position={position}
          icon={
            position[0] === selectedMarkerPosition?.[0] &&
            position[1] === selectedMarkerPosition?.[1]
              ? iconActive
              : icon
          }
          key={index}
          eventHandlers={{ click: () => handleMarkerClick(position) }}
        />
      ))}
    </>
  );
}

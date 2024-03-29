import './MapMarker.scss';
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
  const svgIcon =
    '<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-2{fill:#303442;opacity:0.08;}.cls-3{fill:none;stroke:#303442;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}</style></defs><title>location-pin</title><path  d="M64,18A31.00106,31.00106,0,0,1,95,49c0,22-28,61-31,61S33,71,33,49A31.00106,31.00106,0,0,1,64,18ZM81,49A17,17,0,1,0,64,66,16.99852,16.99852,0,0,0,81,49Z" fill="inherit"/><path class="cls-2" d="M64,100c-2.78558,0-27.12048-33.62146-30.58582-56.03979A31.1863,31.1863,0,0,0,33,49c0,22,28,61,31,61S95,71,95,49a31.1863,31.1863,0,0,0-.41418-5.03979C91.12048,66.37854,66.78558,100,64,100Z"/><path class="cls-3" d="M64,18A31.00106,31.00106,0,0,0,33,49c0,22,28,61,31,61S95,71,95,49A31.00106,31.00106,0,0,0,64,18Z"/><circle class="cls-3" cx="64" cy="49" r="17"/></svg>\n';

  const handleMarkerClick = (position) => {
    setSelectedMarkerPosition(position);
  };

  return (
    <>
      {markersPositions.map((position, index) => (
        <Marker
          position={position}
          icon={L.divIcon({
            className: `icon${
              position[0] === selectedMarkerPosition?.[0] &&
              position[1] === selectedMarkerPosition?.[1]
                ? '_selected'
                : ''
            }`,
            html: svgIcon,
            iconSize: [32, 32],
          })}
          key={index}
          eventHandlers={{ click: () => handleMarkerClick(position) }}
        ></Marker>
      ))}
    </>
  );
}

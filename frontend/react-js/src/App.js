import './App.css';
import Map from './components/Map/Map';
import { useEffect, useState } from 'react';

export default function App() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch('/mockedMarkers.json');
        const markersData = await response.json();

        if (!response.ok) {
          throw new Error('Loading markers error');
        }

        setMarkers(markersData);
      } catch (error) {
        console.error('Loading markers error: ', error);
      }
    };

    fetchMarkers();
  }, []);

  return <Map />;
}

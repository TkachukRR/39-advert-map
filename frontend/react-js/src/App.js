import './App.css';
import { useEffect, useState } from 'react';
import Map from './components/Map/Map';
import List from './components/List/List';

export default function App() {
  const [adverts, setAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState([]);

  const updateVisibleAdverts = (markers) => {
    const visibleAdverts = adverts.filter((advert) =>
      markers.some(
        (visibleMarker) =>
          advert.coordinates[0] === visibleMarker[0] &&
          advert.coordinates[1] === visibleMarker[1],
      ),
    );

    setVisibleAdverts(visibleAdverts);
  };

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch('/mockedAdverts.json');
        const advertsData = await response.json();

        if (!response.ok) {
          throw new Error('Loading markers error');
        }

        setTimeout(() => {
          setAdverts(advertsData);
          setVisibleAdverts(advertsData);
        }, 2000); //TODO delete timeout for real API
      } catch (error) {
        console.error('Loading markers error: ', error);
      }
    };

    fetchAdverts();
  }, []);

  return (
    <>
      <Map adverts={adverts} updateVisibleAdverts={updateVisibleAdverts} />
      <List list={visibleAdverts} title="Adverts:" />
    </>
  );
}

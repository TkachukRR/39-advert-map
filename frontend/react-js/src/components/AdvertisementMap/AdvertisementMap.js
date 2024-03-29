import classes from './AdvertisementMap.module.scss';
import React, { useEffect, useState } from 'react';
import Map from '../Map/Map';
import SidePanel from '../SidePanel/SidePanel';

export default function AdvertisementMap() {
  const [isAdvertisementsList, setIsAdvertisementsList] = useState(true);
  const [isAddAdvertisementForm, setIsAddAdvertisementForm] = useState(false);

  const [advertisements, setAdvertisements] = useState([]);
  const [visibleAdvertisements, setVisibleAdvertisements] = useState([]);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch('/mockedAdverts.json');
        const setAdvertisementsData = await response.json();

        if (!response.ok) {
          throw new Error('Loading markers error');
        }

        setTimeout(() => {
          setAdvertisements(setAdvertisementsData);
          setVisibleAdvertisements(setAdvertisementsData);
        }, 2000); //TODO delete timeout for real API
      } catch (error) {
        console.error('Loading markers error: ', error);
      }
    };

    fetchAdverts();
  }, []);

  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <Map
          advertisements={advertisements}
          visibleAdvertisements={visibleAdvertisements}
          setVisibleAdvertisements={setVisibleAdvertisements}
          setSelectedAdvertisement={setSelectedAdvertisement}
          selectedAdvertisement={selectedAdvertisement}
        />
      </main>
      <aside className={classes.side}>
        <SidePanel
          isAdvertisementsList={isAdvertisementsList}
          isAddAdvertisementForm={isAddAdvertisementForm}
          visibleAdvertisements={visibleAdvertisements}
          selectedAdvertisement={selectedAdvertisement}
          setSelectedAdvertisement={setSelectedAdvertisement}
          setIsAddAdvertisementForm={setIsAddAdvertisementForm}
        />
      </aside>
    </div>
  );
}

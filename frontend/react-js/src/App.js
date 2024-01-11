import './App.scss';
import AdvertisementMap from './components/AdvertisementMap/AdvertisementMap';

export default function App() {
  // const [adverts, setAdverts] = useState([]);
  // const [visibleAdverts, setVisibleAdverts] = useState([]);
  // const [activeAdvert, setActiveAdvert] = useState(null);
  //
  // const updateVisibleAdverts = (markers) => {
  //   const visibleAdverts = adverts.filter((advert) =>
  //     markers.some(
  //       (visibleMarker) =>
  //         advert.coordinates[0] === visibleMarker[0] &&
  //         advert.coordinates[1] === visibleMarker[1],
  //     ),
  //   );
  //
  //   setVisibleAdverts(visibleAdverts);
  // };
  //
  // const updateActiveAdvertId = (marker) => {
  //   const newActiveAdvert = visibleAdverts.filter(
  //     (advert) =>
  //       advert.coordinates[0] === marker[0] &&
  //       advert.coordinates[1] === marker[1],
  //   );
  //
  //   setActiveAdvert(...newActiveAdvert);
  // };
  //
  // useEffect(() => {
  //   const fetchAdverts = async () => {
  //     try {
  //       const response = await fetch('/mockedAdverts.json');
  //       const advertsData = await response.json();
  //
  //       if (!response.ok) {
  //         throw new Error('Loading markers error');
  //       }
  //
  //       setTimeout(() => {
  //         setAdverts(advertsData);
  //         setVisibleAdverts(advertsData);
  //       }, 2000); //TODO delete timeout for real API
  //     } catch (error) {
  //       console.error('Loading markers error: ', error);
  //     }
  //   };
  //
  //   fetchAdverts();
  // }, []);

  return (
    <AdvertisementMap />
    //   <>
    //     <Map
    //       adverts={adverts}
    //       updateVisibleAdverts={updateVisibleAdverts}
    //       updateActiveAdvertId={updateActiveAdvertId}
    //     />
    //     <List
    //       list={visibleAdverts}
    //       title="Adverts:"
    //       activeAdvert={activeAdvert}
    //     />
    //   </>
  );
}

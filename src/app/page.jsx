import { checkCollection, getLocations } from '@/lib/data';
import GoogleMapView from '@/components/GoogleMapView/GoogleMapView';
import styles from './page.module.css';
import LocationList from '@/components/locationList/LocationList';
import MapAndListButtons from '@/components/Map&ListButons/Map&ListButtons';
import MapsNavigation from '@/components/mapsNavigation/MapsNavigation';

const Home = async () => {
  const locations = await getLocations();

  return (
    <main>
      <div className={styles.mapViewWrapper}>
        <MapsNavigation />
        <GoogleMapView locations={locations} />
        <MapAndListButtons />
      </div>
    </main>
  );
};

export default Home;

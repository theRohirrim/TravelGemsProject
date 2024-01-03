import { checkCollection, getLocations } from '@/lib/data'
import GoogleMapView from '@/components/GoogleMapView/GoogleMapView'
import styles from './page.module.css'
import LocationList from '@/components/locationList/LocationList';

const Home = async () => {
  const locations = await getLocations();

  console.log('locations: ', locations)

  return (
    <main>
      HomePage!
      <LocationList locations={locations} />
      <GoogleMapView /> 
    </main>
  )
}

export default Home;
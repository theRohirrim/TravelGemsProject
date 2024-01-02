import { getLocations } from '@/lib/data'
import styles from './page.module.css'
import LocationList from '@/components/locationList/LocationList';

const Home = async () => {
  // const {locations} = await getLocations();

  // console.log('here are locations :', locations)
  return (
    <main>
      HomePage!
      <LocationList />
    </main>
  )
}

export default Home;
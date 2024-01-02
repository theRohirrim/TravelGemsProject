import { getLocations } from '@/lib/data'
import styles from './page.module.css'

const Home = async () => {
  const {locations} = await getLocations();

  console.log('here are locations :', locations)
  return (
    <main>
      HomePage!
    </main>
  )
}

export default Home;
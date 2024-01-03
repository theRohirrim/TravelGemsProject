import { checkCollection, getLocations } from '@/lib/data';
import ExplorePage from '@/components/explore/ExplorePage';

const Home = async () => {

  let locations = await getLocations();
  locations = JSON.parse(JSON.stringify(locations))

  return (
    <main>
      <ExplorePage locations={locations} />
    </main>
  );
};

export default Home;

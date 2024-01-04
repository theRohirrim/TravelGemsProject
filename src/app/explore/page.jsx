import { checkCollection, getLocations } from '@/lib/data';
import ExplorePage from '@/components/explore/ExplorePage';

const Home = async () => {

  let allLocations = await getLocations();
  allLocations = JSON.parse(JSON.stringify(allLocations))

  return (
    <main>
      <ExplorePage allLocations={allLocations} />
    </main>
  );
};

export default Home;

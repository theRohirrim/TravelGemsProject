import { checkCollection, getLocations } from '@/lib/data';
import ExplorePage from '@/components/explore/ExplorePage';

// WITH API FETCH
const getData = async () => {
  const res = await fetch(`${process.env.API_ROUTE}/api/locations`,
  {next: {revalidate: 3600}})

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const Home = async () => {

  // FETCHING WITHOUT API
  // let allLocations = await getLocations();
  // allLocations = JSON.parse(JSON.stringify(allLocations))

  // FETCHING WITH API
  const allLocations = await getData();

  return (
    <main>
      <ExplorePage allLocations={allLocations} />
    </main>
  );
};

export default Home;

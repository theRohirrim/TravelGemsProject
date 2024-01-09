import { checkCollection, getLocations, getUserByEmail } from '@/lib/data';
import ExplorePage from '@/components/explore/ExplorePage';
import { auth } from '@/lib/auth';

// WITH API FETCH
// const getData = async () => {
//   const res = await fetch(`${process.env.API_ROUTE}/api/locations`,
//   {next: {revalidate: 3600}})

//   if (!res.ok) {
//     throw new Error("Something went wrong getting all locations")
//   }

//   return res.json()
// }

const Home = async () => {
  // Get logged in user
  const session = await auth()
  let user = await getUserByEmail(session.user.email)
  user = JSON.parse(JSON.stringify(user))

  // FETCHING WITHOUT API
  let allLocations = await getLocations();
  allLocations = JSON.parse(JSON.stringify(allLocations))

  // FETCHING WITH API
  // const allLocations = await getData();

  return (
    <main>
      <ExplorePage allLocations={allLocations} user={user} />
    </main>
  );
};

export default Home;

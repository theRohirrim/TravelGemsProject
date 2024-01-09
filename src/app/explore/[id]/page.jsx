import LocationCard from '@/components/location/locationCard/LocationCard';
import ReviewWrapper from '@/components/location/reviews/ReviewWrapper';
import { getLocationById } from '@/lib/data';
import { getUserByEmail } from '@/lib/data';
import { auth } from '@/lib/auth';
// WITH API FETCH
// const getData = async (id) => {
//     const res = await fetch(`${process.env.API_ROUTE}/api/locations/${id}`,
//     {next: {revalidate: 3600}})

//     if (!res.ok) {
//     throw new Error("Something went wrong getting single location")
//     }

//     return res.json()
// }

const SingleLocationPage = async ({ params }) => {

    const id = params.id
    const session = await auth()
    console.log(session , "this is the session in review")
  
    const user = await getUserByEmail(session.user.email)
    console.log(user, "this is the user review")

    // FETCH WITH AN API
    // let location = await getData(id)
    // location = location[0]

    // FETCH WITHOUT AN API
    let location = await getLocationById(id)
    location = location[0]
    console.log(location.place_name)

    return (
        <>
        <LocationCard  location ={location}/> 
        <ReviewWrapper id ={id} placeName ={location.place_name}/> 
        </>
    )
}

export default SingleLocationPage;
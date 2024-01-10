import LocationCard from '@/components/location/locationCard/LocationCard';
import ReviewWrapper from '@/components/location/reviews/ReviewWrapper';
import { getLocationById } from '@/lib/data';
import { getUserByEmail } from '@/lib/data';
import { auth } from '@/lib/auth';

const SingleLocationPage = async ({ params }) => {

    const id = params.id
    const session = await auth()
    console.log(session , "this is the session in review")
  
    const user = await getUserByEmail(session?.user.email)

    console.log(user, "this is the user review")

    let location = await getLocationById(id)
    location = location[0]
    console.log(location.place_name)

    return (
        <>
        <LocationCard  location ={location} user={user} /> 
        <ReviewWrapper id ={id} placeName ={location.place_name} user={user}/> 
        </>
    )
}

export default SingleLocationPage;
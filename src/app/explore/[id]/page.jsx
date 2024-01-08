import LocationCard from '@/components/location/locationCard/LocationCard';
import ReviewWrapper from '@/components/location/reviews/ReviewWrapper';
import { getLocationById } from '@/lib/data';

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

    // FETCH WITH AN API
    // let location = await getData(id)
    // location = location[0]

    // FETCH WITHOUT AN API
    let location = await getLocationById(id)
    location = location[0]

    return (
        <>
        <LocationCard  location ={location}/> 
        <ReviewWrapper id ={id}/> 
        </>
    )
}

export default SingleLocationPage;
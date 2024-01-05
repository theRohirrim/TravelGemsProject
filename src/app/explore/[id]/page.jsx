import LocationCard from '@/components/location/locationCard/LocationCard';
import ReviewWrapper from '@/components/location/reviews/ReviewWrapper';

const SingleLocationPage = async ({ params }) => {
    const id = params.id
    let location = await getLocationById(id)
    location = location[0]

    return (
        <>
        <LocationCard  location = {location}/> 
        <ReviewWrapper id ={id}/> 
        </>
    )
}

export default SingleLocationPage;
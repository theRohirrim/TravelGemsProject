import LocationCard from '@/components/location/locationCard/LocationCard';
import ReviewWrapper from '@/components/location/reviews/ReviewWrapper';
import ReviewsCard from '@/components/location/reviews/reviewCards.jsx/ReviewsCard';


const SingleLocationPage = async ({ params }) => {
    const id = params.id

    return (
        <>
        <LocationCard  id = {id}/> 
        <ReviewWrapper id ={id}/> 
        </>
    )
}

export default SingleLocationPage;
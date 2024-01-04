import LocationCard from '@/components/location/locationCard/LocationCard';
import ReviewsCard from '@/components/location/reviews/reviewCards.jsx/ReviewsCard';


const SingleLocationPage = async ({ params }) => {
    const id = params.id

    return (
        <>
        <LocationCard  id = {id}/> 
        <ReviewsCard id ={id}/>
        </>
    )
}

export default SingleLocationPage;
import LocationCard from '@/components/location/LocationCard';

const SingleLocationPage = async ({ params }) => {
    const id = params.id

    return (
        <LocationCard  id = {id}/> 
    )
}

export default SingleLocationPage;
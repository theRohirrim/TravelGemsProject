"use client"
import NewLocationForm from "@/components/add/NewLocationForm";
import { useSearchParams } from "next/navigation"



const AddNewLocation = () => {
    const searchParams = useSearchParams()
    const latitude = searchParams.get('latitude')
    const longitude = searchParams.get('longitude')

    return (
        <main>
            <NewLocationForm latitude={latitude} longitude={longitude} />
        </main>
    )
}

export default AddNewLocation;
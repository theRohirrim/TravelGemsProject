"use client"

import NewLocNoLat from "@/components/add/NewLocNoLat";
import NewLocationForm from "@/components/add/NewLocationForm";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const AddNewLocation = () => {
    const searchParams = useSearchParams()
    const latitude = searchParams.get('latitude')
    const longitude = searchParams.get('longitude')

 
return (
        <main>
            { latitude ? 
            <NewLocationForm latitude={latitude} longitude={longitude} />            
            : 
            <NewLocNoLat />
             }  
        </main>
    )
    
}

export default AddNewLocation;
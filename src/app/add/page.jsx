import NewLocNoLat from "@/components/add/NewLocNoLat";
import NewLocationForm from "@/components/add/NewLocationForm";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";
// import { useSearchParams } from "next/navigation";



const AddNewLocation = async () => {
    // const searchParams = useSearchParams()
    // const latitude = searchParams.get('latitude')
    // const longitude = searchParams.get('longitude')

    // Get logged in user
    const session = await auth()
    const user = await getUserByEmail(session?.user.email)


    return (
        <main>
      
                <NewLocationForm user={user}/>
             
                {/* <NewLocNoLat /> */}
            
        </main>
    )

}

export default AddNewLocation;
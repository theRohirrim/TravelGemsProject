import Image from "next/image"
import styles from "./LocationCard.module.css"
import { getLocationById } from "@/lib/data"

const LocationCard = async ({location}) => { 

    return (
        <section className="mt-20 mb-5 mx-8">

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-96 object-cover' src={location.img} alt="" /></figure>

                <div className="card-body rounded-b-lg bg-indigo-400">

                    <div className = "absolute top-3 left-3 right-3">
                        <h2 className="card-title text-sm  text-gray-800 bg-white bg-opacity-75 p-4 rounded-lg w-fit">{location.address}</h2>   
                            
                        <div className="stats shadow w-40 w-fit mt-5 bg-opacity-75 rounded-lg stats-compact">
    
                            <div className="stat">
                                <div className="stat-title">stars out of 5</div>
                                <div className="stat-value">{location.rating.toFixed(1)}</div>
                                <div className="stat-desc">found by {location.created_by}</div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <p className="p-2">{location.description}</p>

                    <div className="flex flex-col justify-evenly gap-4 sm:flex-row sm:gap-8">
                        {location.categories.map(category => (
                                    <p className="badge badge-neutral sm:w-full ">
                                        <em>{category} </em>
                                    </p>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LocationCard
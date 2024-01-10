import Image from "next/image"
import styles from "./LocationCard.module.css"


const LocationCard = async ({location}) => { 

    const roundedRating = location.rating.toFixed(2)

    return (
        <section className="mt-[80px] mb-5 mt-5 w-5/6 mx-auto lg:mt-40 ">

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-96 object-cover md:h-[1000px]' src={location.img} alt="" /></figure>

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
                                    <p className="badge badge-neutral ">
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



// Spencer's attempt at making a partially highlighted star 
// please feel free to delete/ammend

// let starAverage = location.rating

// const fullStars = Math.floor(starAverage);
// const starArr = [];
// for(let i = 1; i <= fullStars; i++){
// starArr.push(100);}

// if(starAverage < 5) {
// const partialStar = starAverage - fullStars * 100;
// starArr.push(partialStar);
// const emptyStars = 5 - starArr.length;

// for(let i=1; i<= emptyStars; i++) {
// starArr.push(0);}
// }

// function PartialFillIcon({ fillPercentage }) {
// const iconSize = 50; // Size of the icon
    
// return ( <div style={{ position: 'relative', width: iconSize, height: iconSize }}>
// {/* Filled Icon */}
// <FaGem 
//   size={iconSize} 
//   color="#ff643d" // Full star color
//   style={{ position: 'absolute', zIndex: 1 }}
// />

// {/* Overlay Icon (Unfilled Part) */}
// <FaGem 
//   size={iconSize} 
//   color="#bbbac0" // Color for the unfilled part
//   style={{ 
//     position: 'absolute', 
//     clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`, // Clip based on fill percentage
//     zIndex: 2
//   }} 
// />
// </div>
// );
// }
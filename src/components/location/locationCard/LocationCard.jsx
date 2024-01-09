import Image from "next/image"
import styles from "./LocationCard.module.css"


const LocationCard = async ({location}) => { 

    const roundedRating = Math.round((location.rating + Number.EPSILON) * 100) / 100

    return (
        <section className={styles.locationContainer}>
            <section className={styles.imageContainer}> 
            <h1 className={styles.title}>{location.place_name}</h1>
            <div className={styles.imgContainer}>
                {location.img && 
                <Image
                src={location.img} 
                alt='' 
                fill
                className={styles.img} />
                }
            </div>
            </section> 
            <section className={styles.info}>
            <div className={styles.smallInfo}> 
            <div className={styles.categories}>Categories: {location.categories.map((category) => <span className={styles.categoryCard}> {category} </span>)}</div>
            <div className={styles.foundBy.centre}>Found by: {location.created_by}, {location.date_created}</div>
            <div className={styles.rating}>{roundedRating} stars out of 5</div> 
            </div>
            <div className={styles.address}> {location.address} </div>
            <div className={styles.description}>{location.description}</div>
            </section>
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
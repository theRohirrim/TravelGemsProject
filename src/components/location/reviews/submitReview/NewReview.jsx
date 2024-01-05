"use client"

import { useState } from "react"
import style from "./NewReview.module.css"
import { FaStar } from "react-icons/fa"
import { FaGem } from "react-icons/fa";

const NewReview = () => { 
    const [rating, setRating] = useState(null)
    
    const StarRating = () => { 
    return ( 
        <div> 
        {[...Array(5)].map((star, i) => { 
           const currentRating = i + 1;

           return (
            <label key={i}> 
                <input
                type="radio"
                name="rating" 
                className={style.radioButton}
                value={currentRating}
                onClick= {() => {
                if (rating === currentRating){ 
                        setRating(null)
                    } else {   
                    setRating(currentRating)}}}
            />
                <FaGem 
                className={style.star} 
                size={50} 
                color= {currentRating <= rating ? "#ffc107" : "#e4e5e9"}
                />
                </label>
           )  
        })}
        </div>
    )
    }

    return ( 
        <form className={style.newReview}>
            <StarRating />
            <input type="text" placeholder="Share your thoughts.."/> 
            <button>Add Review</button>
        </form>
    ) 
}

export default NewReview
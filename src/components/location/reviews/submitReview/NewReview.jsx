"use client"

import { useState } from "react"
import style from "./NewReview.module.css"
import { FaStar } from "react-icons/fa"
import { FaGem } from "react-icons/fa";
import { submitReview } from "@/lib/action";

const NewReview = ({id}) => { 

    // user data currently hard coded to spikeman
    const userId = "659410c69f7ae624673bafdb"
    const username = "spikeman"

    // location data currently hard coded to covent garden as NewReview needs to be passed id params when rendered
    const locationId = "659568dbedc28e2e44f28bc1"
    const place_name = "Covent Garden"


    const [rating, setRating] = useState(null)
    const [reviewBody, setReviewBody] = useState("")

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

    const handleReviewInput = (event) => {
        let reviewContent = event.target.value
        setReviewBody(reviewContent)
    }

//     Review Data Template: 

//     const reviewData = {
//     body: "Spencer added a review shesffgjkgjilrgj",
//     rating: 2,
//     location_id: "659568dbedc28e2e44f28bc1", 
//     user_id: "659411769f7ae624673bafde",
//     username: "admin",
//     votes: 5,
//     place_name: "Hala Garden",
// }



    const submitNewReview = async (event) => { 
        event.preventDefault()
        //state cannot be used in server side, passing of the data needs to be done through fetch and api end points 
    }

    return (
        <>
        
            <StarRating />
            <form action={submitReview} className={style.newReview}>

                <textarea 
                className={style.reviewInput}
                type="text" 
                placeholder="Share your thoughts.."
                onChange={handleReviewInput}
                wrap="hardsoft"
                name="body"
                /> 
                
                <button>Add Review</button>
            
            </form>
        </>
    ) 
}

export default NewReview
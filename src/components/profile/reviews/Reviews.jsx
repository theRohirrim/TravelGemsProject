import React from 'react'
import styles from "./reviews.module.css"

const Reviews = ({ userReviews }) => {

    return (
        <div>
            

            
                {userReviews.map(review => (
                    <div key={review._id} className="">
                        <div className="card w-96 bg-base-100 shadow-xl bg-indigo-400 m-2">
                            <div className="card-body">
                                <h2 className="card-title">{review.place_name}</h2>
                                <p>{review.username}</p>
                                <p>{review.body}</p>
                                <p>{review.votes} votes</p>
                                
                            </div>
                        </div>
                    </div>

                ))}
            
        </div>
    )
}

export default Reviews;
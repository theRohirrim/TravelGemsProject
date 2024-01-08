import React from 'react'
import styles from "./reviews.module.css"

const Reviews = ({ userReviews }) => {

    return (
        <div>
            {userReviews.map(review => (
                <div key={review._id} className={styles.reviewWrapper}>
                    <p>{review.place_name}</p>
                    <p>{review.body}</p>
                    <p>{review.username}</p>
                    <p>{review.votes} votes</p>
                </div>

            ))}
        </div>
    )
}

export default Reviews;
import { getReviewsById } from '@/lib/data'
import React from 'react'
import styles from "./reviews.module.css"

const Reviews = async ({ id }) => {
    const userReviews = await getReviewsById(id)

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
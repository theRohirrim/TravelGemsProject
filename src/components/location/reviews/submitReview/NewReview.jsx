'use client';
import { useState } from 'react';
import style from './NewReview.module.css';
import { FaGem } from 'react-icons/fa';
import { submitReview } from '@/lib/action';
import ReviewsCard from '../reviewCards.jsx/ReviewsCard';
import { useSession } from 'next-auth/react';

const NewReview =  ({ id, placeName ,username , userID }) => {
  const locationId = id;
  const place_name = placeName;
  const [rating, setRating] = useState(null);
  const [reviewBody, setReviewBody] = useState('');
  const [newReview, setNewReview] = useState([]);


  const handleReviewInput = (event) => {
    let reviewContent = event.target.value;
    setReviewBody(reviewContent);
  };

  const formSubmission = async (e) => {
    e.preventDefault();
    if (rating === null) setRating(0);

    const reviewData = {
      body: reviewBody,
      rating: rating,
      location_id: locationId,
      user_id:userID,
      username: username,
      votes: 0,
      place_name: place_name,
    };

    try {
      const submittedReview = await submitReview(reviewData);
      setNewReview((prevReviews) => [...prevReviews, submittedReview]);
    } catch (error) {
      console.error('Error submitting review:', error);
    }

    setReviewBody('');
    setRating(null);
  };

  return (
    <>
      <form className={style.newReview} onSubmit={formSubmission}>
        <div>
          {[...Array(5)].map((star, i) => {
            const currentRating = i + 1;

            return (
              <label key={i}>
                <input
                  type='radio'
                  name='rating'
                  className={style.radioButton}
                  value={currentRating}
                  onChange={() => {
                    if (rating === currentRating) {
                      setRating(null);
                    } else {
                      setRating(currentRating);
                    }
                  }}
                />
                <FaGem
                  className={style.star}
                  size={50}
                  color={currentRating <= rating ? '#ffc107' : '#e4e5e9'}
                />
              </label>
            );
          })}
        </div>
        <textarea
          className={style.reviewInput}
          type='text'
          placeholder='Share your thoughts..'
          onChange={handleReviewInput}
          value={reviewBody}
          wrap='hardsoft'
          name='body'
        />

        <input type='hidden' name='locationId' value={locationId} />
        <input type='hidden' name='place_name' value={place_name} />

        <button type='submit'>Add Review</button>
      </form>
      {newReview.length > 0
        ? newReview.map((review) => {
            return <ReviewsCard key={review._id} review={review} />;
          })
        : null}
    </>
  );
};

export default NewReview;

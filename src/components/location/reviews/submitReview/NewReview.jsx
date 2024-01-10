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
  const [rating, setRating] = useState(10);
  const [reviewBody, setReviewBody] = useState('');
  const [newReview, setNewReview] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  console.log(rating)


  const handleReviewInput = (event) => {
    let reviewContent = event.target.value;
    setReviewBody(reviewContent);
  };

  const formSubmission = async (e) => {
    e.preventDefault();
    if (rating === null) setRating(0);

    const reviewData = {
      body: reviewBody,
      rating: rating/2,
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
      <form className="flex flex-col my-5 card bg-indigo-400 shadow-xl p-2" onSubmit={formSubmission}>
      
        <div className="rating rating-lg rating-half mx-auto mb-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <input
              key={index}
              type="radio"
              name="rating-10"
              className={`bg-indigo-900 mask mask-star-2 mask-half-${index % 2 === 0 ? '2' : '1'} `}
              checked={rating === index}
              onChange={() => handleRatingChange(index)}
            />
          ))}
        </div>

        <div className="card bg-indigo-300 shadow-xl p-2 mx-auto mb-3">
              <p>{rating/2} {rating/2 > 1? "stars" : "star"} out of 5</p>
        </div>

        <textarea
          className="mx-auto w-5/6 rounded-lg mb-3 p-2"
          type='text'
          placeholder='Share your thoughts..'
          onChange={handleReviewInput}
          value={reviewBody}
          wrap='hardsoft'
          name='body'
        />

        <input type='hidden' name='locationId' value={locationId} />
        <input type='hidden' name='place_name' value={place_name} />

        <button type='submit' className='btn btn-active btn-neutral w-5/6 mx-auto'>Add Review</button>
      </form>
      
    </>
  );
};

export default NewReview;

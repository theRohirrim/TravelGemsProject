"use client"
import { useEffect, useState } from 'react';
import style from './reviews.module.css';
import { deleteReview, handleVoting } from '@/lib/action';

const ReviewsCard = ({ review , userID , username }) => {
  console.log(userID , "this is the userID in the reviewCard")
  console.log(username , "this is the userID in the reviewCard")
  const [voted, setVoted] = useState(false);
  const [updatedVotes, setUpdatedVotes] = useState(review.votes);

  const reviewId = review._id
  const locationId = review.location_id

  const handleVote = async () => {
    try {
      if (!voted) {
        const updatedReview = await handleVoting(review._id);
        setVoted(true);
        console.log(updatedReview," here is the update votes")
        setUpdatedVotes(updatedReview.votes);
      }
    } catch (error) {
      console.error('Error voting for review:', error);
    }
  };

  const handleDelete = async (e) => { 
    e.preventDefault()
    try{ 
      const successfulDelete = await deleteReview({reviewId, locationId})
      window.location.reload();
    } catch { 
      console.log("error deleting- see ReviewsCard")
    }
  }
  return (
    <section className={style.reviewCard} key={review._id.toString()}>
      <p>"{review.body}" - {review.username}</p>
      <p>{review.rating}/5</p>
      <p>{review.createdAt ? review.createdAt.toLocaleDateString() : "04/01/2024"}</p>
      <p>{updatedVotes} votes</p>
      <button onClick={handleVote} disabled={voted} className={style.button}>
  {voted ? 'Voted!' : 'Like'}
</button>
    {review.user_id === userID ? 
    <button onClick={handleDelete} className={style.button}> delete </button> : 
      null}</section>
  );
};

export default ReviewsCard;

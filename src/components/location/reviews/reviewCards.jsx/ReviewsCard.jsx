"use client"
import { useState } from 'react';
import style from './reviews.module.css';
import { handleVoting } from '@/lib/action';

const ReviewsCard = ({ review }) => {
  const [voted, setVoted] = useState(false);
  const [updatedVotes, setUpdatedVotes] = useState(review.votes);

  const handleVote = async () => {
    try {
      if (!voted) {
        const updatedReview = await handleVoting(review._id);
        setVoted(true);
        setUpdatedVotes(updatedReview.votes);
      }
    } catch (error) {
      console.error('Error voting for review:', error);
    }
  };

  return (
    <section className={style.reviewCard} key={review._id.toString()}>
      <p>"{review.body}" -{review.username}</p>
      <p>{review.rating}/5</p>
      <p>{review.createdAt.toLocaleDateString()}</p>
      <p>{updatedVotes} votes</p>
      <button onClick={handleVote} disabled={voted} className={style.button}>
  {voted ? 'Voted!' : 'Like'}
</button>
    </section>
  );
};

export default ReviewsCard;

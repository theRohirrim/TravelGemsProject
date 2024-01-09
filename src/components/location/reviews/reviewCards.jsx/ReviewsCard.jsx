"use client"
import { useEffect, useState } from 'react';
import style from './reviews.module.css';
import { deleteReview, handleVoting } from '@/lib/action';
import { useSession } from 'next-auth/react';

const ReviewsCard = ({ review }) => {
  // const { data: session, status, user} = useSession()
  // useEffect( () => {}, [status] )
  // console.log(status, "status in ReviewCard")
  // console.log(session, "session in Reviewscard")
  // console.log(user, "user in reviewCard")

  const [voted, setVoted] = useState(false);
  const [updatedVotes, setUpdatedVotes] = useState(review.votes);


  const userId = "659410c69f7ae624673bafdb"
  const username = "spikeman"

  const reviewId = review._id
  const locationId = review.location_id

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

  const handleDelete = async (e) => { 
    e.preventDefault()
    try{ 
      const successfulDelete = await deleteReview({reviewId, locationId})
    } catch { 
      console.log("error deleting- see ReviewsCard")
    }
  }
  return (
    <section className={style.reviewCard} key={review._id.toString()}>
      <p>"{review.body}" -{review.username}</p>
      <p>{review.rating}/5</p>
      <p>{review.createdAt ? review.createdAt.toLocaleDateString() : "04/01/2024"}</p>
      <p>{updatedVotes} votes</p>
      <button onClick={handleVote} disabled={voted} className={style.button}>
  {voted ? 'Voted!' : 'Like'}
</button>
    {review.user_id === userId ? 
    <button onClick={handleDelete} className={style.button}> delete </button> : 
      null}</section>
  );
};

export default ReviewsCard;

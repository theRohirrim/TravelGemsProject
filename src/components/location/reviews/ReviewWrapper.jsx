import { getReviews } from "@/lib/data";
import style from "./ReviewWrapper.module.css"
import ReviewsCard from "./reviewCards.jsx/ReviewsCard";
import NewReview from "./submitReview/NewReview";

const ReviewWrapper = async ({id, placeName}) => {

  const allReviews = await getReviews();
  
  //filter reviews for matching id 
  const filterReviews = allReviews.filter((review)=> {
    return review.location_id.toString() === id  
    })

  //sort reviews by date created
  filterReviews.sort((a, b) => {
    if (!a.createdAt) return 1;  
    if (!b.createdAt) return -1; 

    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const formatReviews = filterReviews.map((review) => { 
  let formatedReturn = review.toObject()  
  if (formatedReturn.location_id) formatedReturn.location_id = formatedReturn.location_id.toString();
  if (formatedReturn.user_id) formatedReturn.user_id = formatedReturn.user_id.toString();
  if (formatedReturn._id) formatedReturn._id = formatedReturn._id.toString();
  
  return formatedReturn
  }) 
  
  
  return (
    <article className={style.reviewContainer}>
    <NewReview id = {id} placeName = {placeName}/> 
      {formatReviews.length === 0 ?
        <div className={style.reviewCard}> Be the first to review this location ...</div>
      : 
      formatReviews.map((review)=>{
        return(<ReviewsCard key={review._id} review = {review} />)
      })} 
    </article>
  )
}

export default ReviewWrapper



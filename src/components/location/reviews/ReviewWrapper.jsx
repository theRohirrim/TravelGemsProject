import { getReviews } from "@/lib/data";
import style from "./ReviewWrapper.module.css"
import ReviewsCard from "./reviewCards.jsx/ReviewsCard";
import NewReview from "./submitReview/NewReview";


const ReviewWrapper = async ({id}) => {
  const allReviews = await getReviews();
  
  const filterReviews = allReviews.filter((review)=> {
    return review.location_id.toString() === id
  })


  return (
    <article className={style.reviewContainer}>
    <NewReview /> 
      {filterReviews.length === 0 ?
        <div className={style.reviewCard}> Be the first to reivew this location ...</div>
      : 
      filterReviews.map((review)=>{
        return(<ReviewsCard key={review._id} review = {review} />)
      })} 
    </article>
  )
}

export default ReviewWrapper



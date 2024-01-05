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
      <p> Reviews... </p>
      {filterReviews.map((review)=>{
        return(<ReviewsCard key={review._id} review = {review} />)
      })} 
    </article>
  )
}

export default ReviewWrapper



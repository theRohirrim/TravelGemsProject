import { getReviews } from "@/lib/data";
import style from "./ReviewWrapper.module.css"
import ReviewsCard from "./reviewCards.jsx/ReviewsCard";


const ReviewWrapper = async ({id}) => {
const allReviews = await getReviews();

const filterReviews = allReviews.filter((review)=> {
  return review.location_id.toString() === id})

  return (
    <article className={style.reviewContainer}>
      <p> Reviews... </p>

{filterReviews.map((review)=>{
 return(
  <ReviewsCard review = {review} />
 )
})} 
    </article>
  )
}

export default ReviewWrapper



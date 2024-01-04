import { getReviews } from "@/lib/data";
import style from "./reviews.module.css"
const ReviewsCard = async ({id}) => {
const allReviews = await getReviews();

const filterReviews = allReviews.filter((review)=> {
  return review.location_id.toString() === id})
  return (
    <article className={style.reviewContainer}>
      <p> Reviews... </p>
{filterReviews.map((review)=>{
  return(
  <section className={style.reviewCard} key={review._id.toString()}>
    
    <p>
      "{review.body}" -{review.username}
    </p>
    <p>
      {review.rating}/5
    </p>
    <p>
    {review.createdAt.toLocaleDateString()}
    </p>
    {review.votes} votes 
    <button> like </button>  
    <p>
      
    </p>
  </section>
    )
})}
    </article>
  )
}

export default ReviewsCard



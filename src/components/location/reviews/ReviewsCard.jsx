import { getReviews } from "@/lib/data";
import style from "./reviews.module.css"
const ReviewsCard = async ({id}) => {
console.log(id, "this is the id")
const allReviews = await getReviews();

const filterReviews = allReviews.filter((review)=> {
  return review.location_id.toString() === id})
  console.log(filterReviews, "filterReviews")
  return (
    <article>
{filterReviews.map((review)=>{
  return(
  <section key={review._id.toString()}>
    <p>
      {review.body}
    </p>
    <p>
      {review.username}
    </p>
    <p>
      {review.rating} 
    </p>
    <p>
    {review.createdAt.toLocaleDateString()}
    </p>
    <p>
      {review.votes}
    </p>
  </section>
    )
})}
    </article>
  )
}

export default ReviewsCard



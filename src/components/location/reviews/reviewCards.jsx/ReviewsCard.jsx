import style from "./reviews.module.css"


const ReviewsCard = ({review}) => {

  return(
  <section className={style.reviewCard} key={review._id.toString()}>
    
    <p>
      "{review.body}" -{review.username}
    </p>
    <p>
      {review.rating}/5
    </p>
    <p>
    {review.createdAt ? review.createdAt.toLocaleDateString() : "04/01/2024"}
    </p>
    {review.votes} votes 
    <button> like </button>  
    <p>
      
    </p>
  </section>
  )
}

export default ReviewsCard



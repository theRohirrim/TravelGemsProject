import { getReviews } from "@/lib/data";


const ReviewsCard = async ({id}) => {

  const reviews = await getReviews()

  console.log(reviews)

  // const filteredReviews = reviews.filter((review) => { 
  //   // console.log(review, "review")
  //   return review.location_id === id 
  // })

  return (
    <>
    {/* {filteredReviews.map((review) => { 
      <article>
        <p>{review.body}</p>
        <button>Delete</button>
        <p> {review.username}</p>
        <button>like</button>
        <span>{review.votes} </span>  
      </article>
    })} */}
    </>
  )
}

export default ReviewsCard


// // filter reviews by review id 

// const Reviews = () => {
//     const checkGetReviews = async () => {
//         const reviews = await getReviews();
//         console.log(reviews "here are the reviews");
  
// };

// checkGetReviews()
//   return (
//     <div>Reviews</div>
//   )
// }

// export default Reviews



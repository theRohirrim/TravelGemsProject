import { getReviews } from "@/lib/data";
i

const ReviewsCard = ({id}) => {
  console.log(id)

  const allReviews = async () => {
const reviews = await getReviews();
console.log(reviews "here are the reviews");
  }
Reviews()
  return (
    <div>ReviewsCard</div>
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



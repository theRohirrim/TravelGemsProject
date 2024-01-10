import { connectToDatabase } from "./db"
import { Locations } from "@/models/locations";
import { Users } from "@/models/users";
import { Reviews } from '@/models/reviews';
import mongoose from "mongoose";

export const checkCollection = async () => {
    try {
        connectToDatabase()
        console.log(mongoose.connection.db.listCollections())
        mongoose.connection.db.listCollections({name: 'locations'})
        .next(function(err, collinfo) {
            if (collinfo) {
                console.log("CheckCollection ", collinfo)
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export const getLocations = async () => {
    try {
        connectToDatabase()
        const locations = await Locations.find({})
        return locations

    } catch (error) {
        throw new Error("Error loading location data: ", error)
    }
}
export const postLocation = async (locationData) => {
    try {
        connectToDatabase()
        const newLocation = await Locations.create(locationData);
        return newLocation;
    } catch (error) {
        throw new Error("failed to add new location");
    }
}

export const updateLocationWithReviewId = async ({reviewId, locationId}) => { 
    try { 
        const updatedLocation = await Locations.updateOne(
            {_id : locationId}, 
            { $push: { reviews_by_id: reviewId } })

            if (updatedLocation.matchedCount === 0) {
                console.error("No location found with the given ID");
            } else if (updatedLocation.modifiedCount === 0) {
                console.error("The location was not updated");
            }
        } catch (error) {
            console.error("Error updating location:", error);
        }
    } 
// const locationData = {
//     img: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "Free Red Trees Stock Photo",
//     created_by: "admin",
//     categories: ["nature", "autumn"],
//     address: " Danish Nature, Odense",
//     longitude: -0.0901926471773134,
//     latitude: 51.52723022284781, 
//     rating: 2.3,
//     place_name: "Danish Nature",
//     reviews_by_id: ["65967d8f98b9e3c0c93dd94f", "65967e8c98b9e3c0c93dd951", "65967ea798b9e3c0c93dd952", "65967ebf98b9e3c0c93dd953"]
// };

// const result = await postLocation(locationData);
// console.log(result);


export const getLocationById = async (_id) => {
    try {
        await connectToDatabase()
        const location = await Locations.find({_id})
        return location

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch individual location")
    }
}

export const getLocationsByUsername = async (created_by) => {
    try {
        await connectToDatabase()
        const location = await Locations.find({created_by})
        return location

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch individual location")
    }
}


export const getUsers = async () => {
    try {
        connectToDatabase()
        const users = await Users.find()
        return users

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user data")
    }
}

export const getUserById = async (_id) => {
    try {
        connectToDatabase()
        const user = await Users.find({_id})
        return user

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch individual user data")
    }
};

// when filtered 
export const getReviews = async () => {
    try {
        await connectToDatabase()
        const reviews = await Reviews.find({});
        return reviews;
    } catch (error) {
        throw new Error("Failed to fetch review data");
    }
};

export const getReviewsById = async (user_id) => {
    try {
        const reviews = await Reviews.find({user_id});
        return reviews;
    } catch (error) {
        throw new Error("Failed to fetch review data");
    }
};


export const postReview = async (reviewData) => {
    try {
        const newReview = await Reviews.create(reviewData);
        return newReview;
    } catch (error) {
        throw new Error("failed to adding review");
    }
};

// const reviewData = {
//     body: "Hala added a review shesffgjkgjilrgj",
//     rating: 2,
//     location_id: "659568dbedc28e2e44f28bc1", 
//     user_id: "659411769f7ae624673bafde",
//     username: "admin",
//     votes: 5,
//     place_name: "Hala Garden",
// }

// const result = await postReview(reviewData);
// console.log(result);

export const voteForReview = async (reviewId) => {
    try {
        const newVote = await Reviews.findByIdAndUpdate(
            reviewId,
            { $inc: { votes: 1 } },
            { new: true }
        )
        if (!newVote) {
            throw new Error('Review not found');
        }
        return newVote;
    } catch (error) {
        console.log(error);
    }
};

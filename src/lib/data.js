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

export const postLocation = async () => {
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
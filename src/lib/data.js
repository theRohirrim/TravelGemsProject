import { connectToDatabase } from "./db"
import { Locations } from "@/models/locations";
import { Users } from "@/models/users";
import { Review } from '@/models/reviews';
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

export const getUserById = async (id) => {
    try {
        connectToDatabase()
        const user = await Users.findById(id)
        return user

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch individual user data")
    }
};

// when filtered 
export const getReviews = async () => {
    try {
        const reviews = await Review.find({});
        return reviews;
    } catch (error) {
        throw new Error("Failed to fetch review data");
    }
};

// getting reviews from single location 
export const getReviewbyId = async (location_id) => {
    try {
        const review = await Review.find({location_id:location_id});
        return review;
    } catch (error) {
        throw new Error("Failed to fetch review data");
    }
};

export const postReview = async (reviewData) => {
    try {
        const newReview = await Review.create(reviewData);
        return newReview;
    } catch (error) {
        throw new Error("failed to adding review");
    }
};


const checkGetReviews = async () => {
    const reviews = await getReviews();
    console.log(reviews , "here are the reviews");
  
  };
  
  checkGetReviews()
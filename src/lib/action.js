"use server"

import { Users } from "@/models/users";
import { signIn, signOut } from "./auth";
import { connectToDatabase } from "./db";
import bcrypt from 'bcryptjs'
import { postLocation, updateLocationWithReviewId } from "./data";
import { voteForReview } from './data';
import { postReview } from "./data";


export const handleGithubLogin = async () => {
    await signIn("github", {callbackUrl: "/explore"})
}

export const handleLogout = async () => {
    await signOut()
}

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) {
        return {error: "Passwords do not match"}
    }

    try {
        connectToDatabase()

        const usernameUser = await Users.findOne({username})

        if (usernameUser) {
            return {error: "Username already exists"}
        }

        const emailUser = await Users.findOne({email})

        if (emailUser) {
            return {error: "Email is already used"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new Users({
            username,
            email,
            password: hashedPassword,
            img
        })

        await newUser.save();
        return {success: true}
    } catch (err) {
        console.log(err)
        return  { error: "Something went wrong"}
    }
}

export const login = async (previousState, formData) => {
    const { username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", {username, password})
    } catch (err) {
        console.log(err)

        if (err.message.includes("CredentialsSignin")) {
            return {error: "Invalid username or password"}
        }
        throw err;
    }
}

export const submitReview = async (formData) => {

    try {
        const postedReview = await postReview(formData);
        const locationId = postedReview.location_id
        const reviewId = postedReview._id


        let formatedReturn = postedReview.toObject()

        
    if (formatedReturn.location_id) formatedReturn.location_id = formatedReturn.location_id.toString();
    if (formatedReturn.user_id) formatedReturn.user_id = formatedReturn.user_id.toString();
    if (formatedReturn._id) formatedReturn._id = formatedReturn._id.toString();
    
    const successfulUpdate = await updateLocationWithReviewId({locationId, reviewId})
    
    return formatedReturn;
    } catch (error) {
        throw new Error("failed to adding review");
    }
};

export const submitLocation = async (formData) => {
    try {
        console.log("trying to submit")
        await postLocation(formData)
    } catch (error) {
        console.log(error, "error in submit")
        throw new Error("Failed to post location")
    }
}



export const handleVoting = async (reviewId) => {
    try {
        const updatedReview = await voteForReview(reviewId);
    } catch (error) {
      console.log(error);
    }
  };


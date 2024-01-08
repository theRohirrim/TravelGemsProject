"use server"

import { Users } from "@/models/users";
import { signIn, signOut } from "./auth";
import { connectToDatabase } from "./db";
import bcrypt from 'bcryptjs'
import { postLocation, postReview } from "./data";

export const handleGithubLogin = async () => {
    await signIn("github", { callbackUrl: "/explore" })
}

export const handleLogout = async () => {
    await signOut()
}

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" }
    }

    try {
        connectToDatabase()

        const user = await Users.findOne({ username })

        if (user) {
            return { error: "Username already exists" }
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new Users({
            username,
            email,
            password: hashedPassword,
            img
        })

        console.log(newUser);

        await newUser.save();
        return { success: true }
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData)

    try {
        await signIn("credentials", { username, password })
    } catch (err) {
        console.log(err)

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" }
        }
        throw err;
    }
}

export const submitReview = async (formData) => {

    try {
        const postedReview = await postReview(formData);
        let formatedReturn = postedReview.toObject()

        if (formatedReturn.location_id) formatedReturn.location_id = formatedReturn.location_id.toString();
        if (formatedReturn.user_id) formatedReturn.user_id = formatedReturn.user_id.toString();
        if (formatedReturn._id) formatedReturn._id = formatedReturn._id.toString();
        const review_id = formatedReturn._id
        if (formatedReturn.createdAt) formatedReturn.createdAt = formatedReturn.createdAt.toISOString();


        return formatedReturn;
    } catch (error) {
        throw new Error("failed to adding review");
    }
};

export const submitLocation = async () => {
    console.log("Whyyy")
    const testLocation = {
        address: "London",
        categories: ['park'],
        created_by: "spikeman", 
        description: "another park",
        latitude: 51.51123897160571,
        longitude: -0.1708450056152344,
        place_name: "Hyde Park"
}

    // const testLocation = {
    //     img: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
    //     description: "nice park",
    //     created_by: "spikeman",
    //     categories: ["nature", "autumn"],
    //     address: "London",
    //     latitude: 51.51123897160571,
    //     longitude: -0.1708450056152344,
    //     place_name: "Danish Nature",
    // }
    try {
        await postLocation(testLocation)
    } catch (error) {
        console.log(error)
        throw new Error("failed to post")
    }


    // try {
    //     console.log("in action...")
    //     const result = await postLocation(location)
    //     return result
    // } catch (error) {
    //     console.log(error, "this is the error...")
    //     throw new Error("Location could not be added")
    // }

}


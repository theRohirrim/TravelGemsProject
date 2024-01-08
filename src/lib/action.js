"use server"

import { Users } from "@/models/users";
import { signIn, signOut } from "./auth";
import { connectToDatabase } from "./db";
import bcrypt from 'bcryptjs'

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

        const user = await Users.findOne({username})

        if (user) {
            return {error: "Username already exists"}
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

export const submitReview = (formData) => {
    const { body } = Object.fromEntries(formData)
    console.log(body)

    console.log("HERE YOU CAN SUBMIT REVIEW")
}
import { NextResponse } from "next/server";
import { Locations,  Users } from "./models"
import { connectToDatabase } from "./utils"

export async function getLocations() {
    await connectToDatabase();
    try {
        const locations = await Locations.find({})
        return locations;

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch location data")
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
}
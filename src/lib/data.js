import { Location, User } from "./models"
import { connectToDatabase } from "./utils"

export const getLocations = async () => {
    try {
        connectToDatabase()
        const locations = await Location.find()
        return locations

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch location data")
    }
}

export const getLocationById = async (_id) => {
    try {
        connectToDatabase()
        const location = await Location.find({_id})
        return location

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch individual location")
    }
}

export const getUsers = async () => {
    try {
        connectToDatabase()
        const users = await User.find()
        return users

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user data")
    }
}

export const getUserById = async (id) => {
    try {
        connectToDatabase()
        const user = await User.findById(id)
        return user

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch individual user data")
    }
}
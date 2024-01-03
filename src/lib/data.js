import { connectToDatabase } from "./db"
import { Locations } from "@/models/locations";
import { Users } from "@/models/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const getLocations = async () => {
    try {
        connectToDatabase()
        const locations = await Locations.find({})
        return locations

    } catch (error) {
        throw new Error("Error loading location data: ", error)
    }
}

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
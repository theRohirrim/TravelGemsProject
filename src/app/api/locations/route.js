import { connectToDatabase } from "@/lib/db"
import { Locations } from "@/models/locations"
import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {
        connectToDatabase()
        const locations = await Locations.find()
        return NextResponse.json(locations)
    } catch (err) {
        throw new Error("Failed to fetch locations")
    }
}
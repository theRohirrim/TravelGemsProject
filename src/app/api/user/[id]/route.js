import { Users } from "@/models/users";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id } = params; 

    try {
        connectToDatabase()
        const user = await Users.findByID(id)
        return NextResponse.json(user)
    } catch (err) {
        throw new Error("Failed to fetch user by ID")
    }
}
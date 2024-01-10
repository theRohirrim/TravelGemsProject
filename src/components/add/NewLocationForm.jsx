"use client"
import { submitLocation } from '@/lib/action';
import React, { useState } from 'react'

export default function NewLocationForm({latitude, longitude}) {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const data = {
        created_by: "spikeman",
        categories: ["Park"],
        place_name: "hyde park",
        address: "London",
        latitude: 51.5113275358464,
        longitude: -0.16587415199083466,
        description:"nice park",
        // img:"https://images.pexels.com/photos/134061/pexels-photo-134061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2z"
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submit...")

        try {
            console.log(data, "submit trying...")
            await submitLocation(data)
            console.log("2")
        } catch (error) {
            throw new Error("could not submit location")
        }
    }


    return (
        <div>
            <h1>New gem</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="place-name">Place name:</label>
                <input value={placeName} onChange={e => setPlaceName(e.target.value)}  type="text" id="place-name" placeholder="Leadenhall Market" /><br/>
                <label htmlFor="location">Location:</label>
                <input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location" placeholder="London" /><br/>
                <label   htmlFor="category">Category:</label>
                <select value={category} onChange={e => setCategory(e.target.value)} name="category" id="category">
                    <option value="market">Market</option>
                    <option value="park">Park</option>
                </select><br/>
                <label  htmlFor="description">Description:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="A beautiful covered market in the historic center of London"></textarea><br/>
                <label htmlFor="image">Upload an image:</label>
                <input type="file" id="image" name="image" /><br/>
                <button type='submit'>Add new location</button>
            </form>
        </div>
    )
}
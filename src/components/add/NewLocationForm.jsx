"use client"

import { submitLocation } from '@/lib/action';
import React, { useState } from 'react'

export default function NewLocationForm({latitude, longitude}) {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    // address
    // img?

//     const newLocation = {
//     img: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     description: "nice park",
//     created_by: "spikeman",
//     categories: ["park"],
//     address: "London",
//     longitude: -0.16191575361148322,
//     latitude: 51.512807425080254,
//     place_name: "Hyde Park",
// };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting...")
       
        const newLocation = {
            created_by: "spikeman",
            categories: [category],
            place_name: placeName,
            address: location,
            latitude: Number(latitude),
            longitude: Number(longitude),
            description,
            img: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        console.log(newLocation)
        submitLocation(newLocation)
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
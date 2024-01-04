"use client"
// import { postLocation } from '../../lib/data.js';
import React, { useState } from 'react'

export default function NewLocationForm({latitude, longitude}) {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     await postLocation({place_name: placeName, address: location, latitude, longitude, categories: category, description})
        // } catch (error) {
        //     console.log(error, "error posting")
        // }
        
        console.log("submit")
    }


    return (
        <div>
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


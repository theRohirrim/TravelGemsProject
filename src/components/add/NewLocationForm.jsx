"use client"
import { submitLocation } from '@/lib/action';
import React, { useState } from 'react'

export default function NewLocationForm({latitude, longitude}) {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    // const [img, setImg] = useState([])

    // address
    // img?

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submitting...")
        try {
            await submitLocation()
        } catch (error) {
            console.log(error)
            throw new Error("handle submit")
        }
        
       
        // const newLocation = {
        //     created_by: "spikeman",
        //     categories: [category],
        //     place_name: placeName,
        //     address: location,
        //     latitude: Number(latitude),
        //     longitude: Number(longitude),
        //     description,
        //     img: "https://images.pexels.com/photos/134061/pexels-photo-134061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        // }
        // console.log(newLocation)
        // try {
        //     console.log("try...")
        //     await submitLocation( {
        //             address: "London",
        //             categories: ['park'],
        //             created_by: "spikeman", 
        //             description: "another park",
        //             latitude: 51.51123897160571,
        //             longitude: -0.1708450056152344,
        //             place_name: "Hyde Park"
        //         }
        //     )
        // } catch (error) {
        //     console.log(error)
        //     throw new Error("Could not add location")
        // }      
        // setPlaceName("")
        // setLocation("")
        // setCategory("")
        // setDescription("")
    }


    return (
        <div>
            <h1>New gem</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="placeName">Place name:</label>
                <input value={placeName} onChange={e => setPlaceName(e.target.value)}  type="text" id="placeName" placeholder="Leadenhall Market" /><br/>
                <label htmlFor="location">Location:</label>
                <input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location" placeholder="London" /><br/>
                <label   htmlFor="category">Category:</label>
                <select value={category} onChange={e => setCategory(e.target.value)} name="category" id="category">
                    <option value="Market">Market</option>
                    <option value="Park">Park</option>
                </select><br/>
                <label  htmlFor="description">Description:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="A beautiful covered market in the historic center of London"></textarea><br/>
                {/* <label htmlFor="image">Upload an image:</label>
                <input type="file" id="image" name="image" accept='image/*' onChange={e => setImg(e.target.files)} /><br/> */}
                <button type='submit'>Add new location</button>
            </form>
        </div>
    )
}
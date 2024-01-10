"use client"
import { submitLocation } from '@/lib/action';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';

export default function NewLocationForm({ latitude, longitude }) {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);

    let categoryOptions = [
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Scenic', label: 'Scenic' },
        { value: 'Shopping', label: 'Shopping' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Entertainment', label: 'Entertainment' }
    ]


    const handleSubmit = async (e) => {
        e.preventDefault()

            // find the address from the lat and lon
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY; 
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
            const response = await fetch(url);
            const formatRes = await response.json(); 
            let singleLocation = formatRes.results[0].formatted_address          


            

        const data = {
            created_by: "spikeman",
            categories: ["Scenic"],
            place_name: placeName,
            address: location.length === 0 ? singleLocation : location,
            latitude: Number(latitude),
            longitude: Number(longitude),
            description: description,
            img: "https://images.pexels.com/photos/134061/pexels-photo-134061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2z"
        }


        try {              
 
            const postedLocation = await submitLocation(data)
            setPlaceName("")
            setLocation("")
            setDescription("")
            setCategories([])

        } catch (error) {
            throw new Error("could not submit location")
        }
    }

    const handleCategoryChange = (selectedOption) => {
        const selectedCategories = selectedOption.map((option) => {
            return option.value
        })
        setCategories(selectedCategories)
        console.log(categories)
    }

    return (
        <div>
            <h1>New gem</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="place-name">Place name:</label>
                <input value={placeName} onChange={e => setPlaceName(e.target.value)} type="text" id="place-name" placeholder="Leadenhall Market" /><br />
                <label htmlFor="location">Location:</label>
                <input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location" placeholder="London" /><br />
                {/*                 
                <label htmlFor="category">Categories:</label>
                
                <select value={category} onChange={e => setCategory(e.target.value)} name="category" id="category" multiple>
                    <option value="market">Market</option>
                    <option value="park">Park</option>
                </select><br /> */}

                <div >
                    <p>Categories:</p>
                    <Select
                        isMulti
                        name="categories"
                        options={categoryOptions}
                        onChange={handleCategoryChange}

                        classNamePrefix="select"
                    />
                </div>


                <label htmlFor="description">Description:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="A beautiful covered market in the historic center of London"></textarea><br />
                <label htmlFor="image">Upload an image:</label>
                <input type="file" id="image" name="image" /><br />
                <button type='submit'>Add new location</button>
            </form>
        </div>
    )
}
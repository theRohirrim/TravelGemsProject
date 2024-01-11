"use client"
import { submitLocation } from '@/lib/action';
import React, {useState } from 'react'
import Select from 'react-select';

export default function NewLocationForm({ latitude, longitude }) {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [img, setImg] = useState("");

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
            description,
            img: img || "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
            rating: 0,
        }

        try {              
            const postedLocation = await submitLocation(data)
            setPlaceName("")
            setLocation("")
            setDescription("")
            setCategories([])
            setImg("")
        } catch (error) {
            throw new Error("could not submit location")
        }
    }

    const handleCategoryChange = (selectedOption) => {
        const selectedCategories = selectedOption.map((option) => {
            return option.value
        })
        setCategories(selectedCategories)
    }

    //convert to base64 Strings, allows upload of small images
    const handleFileChange = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }

    return (
        <div>
            <h1>New gem</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="place-name">Place name:</label>
                <input value={placeName} onChange={e => setPlaceName(e.target.value)} type="text" id="place-name" placeholder="Leadenhall Market" /><br />
                <label htmlFor="location">Location:</label>
                <input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location" placeholder="London" /><br />

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
                <input type="file" id="image" name="image" accept='image/*' onChange={handleFileChange}/><br />
                <button type='submit'>Add new location</button>
                {img && <img width={500} height={500} src={img} />}
            </form>
        </div>
    )
}
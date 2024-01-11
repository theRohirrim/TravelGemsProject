"use client"
import { submitLocation } from '@/lib/action';
import React, {useEffect, useState } from 'react'
import Select from 'react-select';

 const NewLocationForm = ({ latitude, longitude }) => {
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



    useEffect(() => {
        const fetchAddress = async () => {
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
            try {
                const response = await fetch(url);
                const formatRes = await response.json();
                let locationAddress = formatRes.results[0].formatted_address;
                setLocation(locationAddress);
            } catch (error) {
                console.error("Error fetching location: ", error);
            }
        };

        fetchAddress();
    }, [latitude, longitude]);

    
    const handleSubmit = async (e) => {
        e.preventDefault()

            
            // find the address from the lat and lon

        const data = {
            created_by: "spikeman",
            categories: ["Scenic"],
            place_name: placeName,
            address: location,
            latitude: Number(latitude),
            longitude: Number(longitude),
            rating: 0,
            description,
            img: img,
            rating: 0,
        }
          
            await submitLocation(data)
            setPlaceName("")
            setLocation("")
            setDescription("")
            setCategories([])
            setImg("")
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
                <input value={placeName} onChange={e => setPlaceName(e.target.value)} type="text" id="place-name" placeholder="Name your Gem.." /><br />
                <label htmlFor="location">Location:</label>
                <input value={location} onChange={e => {setLocation(e.target.value)} } type="text" id="location" placeholder="Address... " /><br />

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
                <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="a brief description of your gem.. "></textarea><br />
                <label htmlFor="image">Upload an image:</label>
                <input type="file" id="image" name="image" accept='image/*' onChange={handleFileChange}/><br />
                <button type='submit'>Add new location</button>
                {img && <img width={500} height={500} src={img} />}
            </form>
        </div>
    )
}

export default NewLocationForm
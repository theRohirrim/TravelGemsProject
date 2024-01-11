"use client"
import { submitLocation } from '@/lib/action';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import Select from 'react-select';

const NewLocationForm = ({ user }) => {
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [img, setImg] = useState("");

    let latitude
    let longitude
    const searchParams = useSearchParams()
    latitude = searchParams.get('latitude')
    longitude = searchParams.get('longitude')

    let username;

    if (user) {
        username = user.username

    } else {
        username = null
    }


    let categoryOptions = [
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Scenic', label: 'Scenic' },
        { value: 'Shopping', label: 'Shopping' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Entertainment', label: 'Entertainment' }
    ]

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    useEffect(() => {
        const fetchCoordinates = async () => {
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
            const address = '24%20Sussex%20Drive%20Ottawa%20ON'; // URL-encoded address
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

            try {
                const response = await fetch(url);
                const formatRes = await response.json();
                const location = formatRes.results[0].geometry.location;
            } catch (error) {
                console.error("Error fetching coordinates: ", error);
            }
        };

        fetchCoordinates();
    }, []);

    useEffect(() => {
        const fetchAddress = async () => {
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
            try {
                if (latitude) {
                    const response = await fetch(url);
                    const formatRes = await response.json();
                    let locationAddress = formatRes.results[0].formatted_address;
                    setLocation(locationAddress);
                }
            } catch (error) {
                console.error("Error fetching location: ", error);
            }
        };

        fetchAddress();
    }, [latitude, longitude]);


    const handleSubmit = () => {

        // find the address from the lat and lon

        const data = {
            created_by: username,
            categories: ["Scenic"],
            place_name: placeName,
            address: location,
            latitude: Number(latitude),
            longitude: Number(longitude),
            description,
            img: img || "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
            rating: 0,
        }

        try {
            submitLocation(data)
            setPlaceName("")
            setLocation("")
            setDescription("")
            setCategories([])
            setImg("")
        } catch {
            throw new Error("Could not add new location")
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

    const inputRef = useRef()

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces()
        if (place) {
            setLocation(place.formatted_address)
            latitude = place.geometry.location.lat()
            longitude = place.geometry.location.lng()
        }
    }
    return (
        <div>
            <h1>New gem</h1>
            <form action={handleSubmit} onSubmit={() => false}>
                <label htmlFor="place-name">Place name:</label>
                <input value={placeName} onChange={e => setPlaceName(e.target.value)} type="text" id="place-name" placeholder="Name your Gem.." required/><br />

                <label htmlFor="location">Location:</label>
                {latitude ?
                    <input value={location} type="text" id="location" disabled />
                    :
                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} libraries={["places"]}>
                    <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
                        <input type='text' placeholder='Enter location' />
                    </StandaloneSearchBox>
                </LoadScript>}

                                <div className='join join-vertical'>
                                    <p className='bg-indigo-300 join-item p-2'>Categories:</p>

                                    <div className="card bg-base-100 shadow-xl join-item p-2">
                                            <Select
                                                isMulti
                                                name="categories"
                                                options={categoryOptions}
                                                onChange={handleCategoryChange}
                                                classNamePrefix="select"
                                            />    
                                    </div>

                                </div>

                <label htmlFor="description" >Description:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} id="description" placeholder="a brief description of your gem.. " required></textarea><br />
                <label htmlFor="image">Upload an image:</label>
                <input type="file" id="image" name="image" accept='image/*' onChange={handleFileChange} /><br />
                <button type='submit'>Add new location</button>
                {img && <img width={500} height={500} src={img} />}
            </form>


        </div>
    )
}

export default NewLocationForm
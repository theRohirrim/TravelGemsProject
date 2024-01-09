'use client';

import React, { useEffect } from "react";
import Select from 'react-select';
import styles from "./mapsNav.module.css";
import { IoMdAdd } from "react-icons/io";

const categoryOptions = [
    {value: 'Mystery', label: 'Mystery'},
    {value: 'Scenic', label: 'Scenic'},
    {value: 'Shopping', label: 'Shopping'},
    {value: 'Sports', label: 'Sports'},
    {value: 'Entertainment', label: 'Entertainment'}
]

const MapsNavigation = ({filterOptions, setFilterOptions, setAddLocation, addLocation, setSelectedLocation}) => {

    const handleRatingChange = (event) => {
        event.preventDefault()

        setFilterOptions((current) => {
            return {
                ...current,
                rating: 5 - event.target.value
            }
        })
    }

    const handleCategoryChange = (selectedOption) => {
        const categories = selectedOption.map((option) => {
            return option.value
        })

        setFilterOptions((current) => {
            return {
                ...current,
                categories: categories
            }
        })
    }

    const handleAddClick = () => {
        setAddLocation(addLocation => !addLocation)
        setSelectedLocation({})
    }

    return ( 
            <div className={`${styles.buttonWrapper} flex justify-between mt-4 p-2 `}>
                
                <div className="flex justify-center gap-40 ">
                    <div className={styles.ratingContainer}>
                        <label>Rating</label>
                        <input onChange={handleRatingChange} className={styles.rangeInput} type="range" id="rating" defaultValue={5} min={0} max={5} step={0.5} />
                        <p>{!filterOptions.rating || filterOptions.rating === 0 ? 'All Ratings' : filterOptions.rating === 5 ? '5 star only' : `${filterOptions.rating} stars or more`}</p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <button className="btn btn-neutral" onClick={handleAddClick}>Add Gem<IoMdAdd /></button>
                        {addLocation && <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                            <div tabIndex={0} className="card-body">
                            <h2 className="card-title"></h2> 
                                <p>select a location on the map</p>
                            </div>
                        </div>}
                    </div>
                </div>


                <div className={styles.categoriesContainer}>
                    <p>Categories</p>
                    <Select
                    isMulti
                    name="categories"
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    className="w-1/2"
                    classNamePrefix="select"
                    />
                </div>

        </div>
    );
};

export default MapsNavigation;

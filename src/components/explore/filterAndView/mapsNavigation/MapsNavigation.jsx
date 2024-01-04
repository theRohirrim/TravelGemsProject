'use client';

import React, { useState } from "react";
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

const MapsNavigation = ({filterOptions, setFilterOptions}) => {

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


    return ( 
        <div className={styles.mapWrapper}>
            <div className={`${styles.buttonWrapper} flex justify-between mt-4`}>
                <div className={styles.topFilters}>
                    <button className={styles.button}>Add Gem <IoMdAdd /></button>
                    <div className={styles.ratingContainer}>
                        <label>Rating</label>
                        <input onChange={handleRatingChange} className={styles.rangeInput} type="range" id="rating" defaultValue={5} min={0} max={5} step={0.5} />
                        <p>{!filterOptions.rating || filterOptions.rating === 0 ? 'All Ratings' : filterOptions.rating === 5 ? '5 star only' : `${filterOptions.rating} stars or more`}</p>
                    </div>
                </div>
                <div className={styles.categoriesContainer}>
                    <p>Categories</p>
                    <Select
                    isMulti
                    name="categories"
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    className={styles.selectDropdown}
                    classNamePrefix="select"
                    />
                </div>
            </div>

        </div>
    );
};

export default MapsNavigation;

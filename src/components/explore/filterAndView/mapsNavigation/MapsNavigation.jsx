'use client';

import React from "react";
import styling from "./mapsNav.module.css";
import { IoMdAdd } from "react-icons/io";

const MapsNavigation = () => { 
    return ( 
        <div className={styling.mapWrapper}>
            <form action="/search_results"className={styling.form} >
                <input type="text" placeholder="Search places" className={styling.search_input} />
            </form> 
            <div className={`${styling.buttonWrapper} flex justify-between mt-4`}>
                <button className={styling.button}> <IoMdAdd /></button>
                <button className={styling.button}>Filter</button>
            </div>
        </div>
    );
};

export default MapsNavigation;

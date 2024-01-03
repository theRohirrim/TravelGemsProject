import React from "react";
import styling from "./mapsNav.module.css";

const MapsNavigation = () => { 
    return ( 
        <div className={styling.mapWrapper}>
            <form action="/search_results"className={styling.form} >
                <input type="text" placeholder="Search places" className={styling.search_input} />
            </form> 
            <div className={`${styling.buttonWrapper} flex justify-between mt-4`}>
                <button className={styling.button}>Add Location</button>
                <button className={styling.button}>Filter</button>
            </div>
        </div>
    );
};

export default MapsNavigation;

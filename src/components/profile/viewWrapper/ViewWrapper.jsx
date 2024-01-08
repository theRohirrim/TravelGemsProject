"use client"
import { useState } from "react"
import Locations from "../locations/Locations"
import Reviews from "../reviews/Reviews"
import SelectView from "../selectView/SelectView"

const ViewWrapper = ({userReviews, locations}) => {
    const [locationsView, setLocationsView] = useState(true);

    return (
        <div>
            <SelectView locationsView={locationsView} setLocationsView={setLocationsView}/>
            {locationsView ? <Locations locations={locations} /> : <Reviews userReviews={userReviews}/>}
        </div>
    )
}

export default ViewWrapper
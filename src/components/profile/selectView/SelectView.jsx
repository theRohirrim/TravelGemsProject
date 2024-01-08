"use client"

const SelectView = ({ locationsView, setLocationsView }) => {
    const handleReviewsClick = () => {
        if (locationsView !== false) setLocationsView(false)
    }

    const handleLocationsClick = () => {
        if (locationsView !== true) setLocationsView(true)
    }

    return (
        <div>
            <button onClick={handleLocationsClick}>Locations</button>
            <button onClick={handleReviewsClick}>Reviews</button>
        </div>
    );
}

export default SelectView;
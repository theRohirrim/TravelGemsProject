const MapsNavigation = () => { 
    return ( 
        <div> 
            <form action="/search_results">
            <input type="text" placeholder="search..." />
            <button type="submit">Search</button>
            </form> 
            <button> Add Location</button>
            <button> Filter </button>
        </div>
    )
}

export default MapsNavigation
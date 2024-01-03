import styling from "./MapAndListButton.module.css"


const MapAndListButtons = () => { 
    return ( 
        <div className={styling.buttonContainer}> 
        <button className={styling.viewButtons}> Map View</button>
        <button className={styling.viewButtons}> List View </button>
        </div>
    )
}

export default MapAndListButtons
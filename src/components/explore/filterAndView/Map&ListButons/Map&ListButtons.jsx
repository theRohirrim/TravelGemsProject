import styles from "./MapAndListButton.module.css"


const MapAndListButtons = ({mapView, setMapView}) => { 

    const handleClick = () => {
        setMapView((current) => {
            return !current
        })
    }

    return ( 
        <div className={styles.buttonContainer}> 
        <button onClick={handleClick} className={`${styles.viewButtons} ${mapView === true && styles.active}`}> Map View</button>
        <button onClick={handleClick} className={`${styles.viewButtons} ${mapView === false && styles.active}`}> List View </button>
        </div>
    )
}

export default MapAndListButtons
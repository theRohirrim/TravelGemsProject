import styles from "./saveLocation.module.css"

const SaveLocation = () => {
    return (
        <div className={styles.container}>
            <form>
                <button className={styles.button}>Save</button>
            </form>
        </div>
    )
}

export default SaveLocation;
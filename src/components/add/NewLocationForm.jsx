"ues client"
import React from 'react'

export default function NewLocationForm({latitude, longitude}) {

    return (
        <div>
            <form>
                <label htmlFor="place-name">Place name:</label>
                <input type="text" id="place-name" placeholder="Leadenhall Market" /><br/>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" placeholder="London" /><br/>
                <label htmlFor="category">Category:</label>
                <select name="category" id="category">
                    <option value="market">Market</option>
                    <option value="park">Park</option>
                </select><br/>
                <label htmlFor="description">Description:</label>
                <textarea id="description" placeholder="A beautiful covered market in the historic center of London"></textarea><br/>
                <label htmlFor="image">Upload an image:</label>
                <input type="file" id="image" name="image" />
            </form>
        </div>
    )
}


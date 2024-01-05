'use client'

import { AuthContext } from "@/contexts/Auth"
import { useContext } from "react"

const Test = () => {
    const context = useContext(AuthContext)

    return (
        <div>
            <h1>Test here</h1>
            <p>User is {context.user}</p>
        </div>
    )
}

export default Test
'use client'

import { AuthContext } from "@/contexts/Auth"
import { useContext } from "react"

const Test = () => {
    // const context = useContext(AuthContext)

    // console.log("USER IS : ", context.user)

    return (
        <div>
            <h1>Test here</h1>
            {/* <p>{context.user}</p> */}
        </div>
    )
}

export default Test
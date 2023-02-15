
import { useState } from "react";

export const Message=()=>{
    const [message, setMesage] = useState("welcome Francis")
    const fda=()=>{
        console.log("you have click me.")
    }
    return (
        <div>
            <h3>{ message }</h3>
            <button onClick={()=> setMesage("Thank you for visiting.")}>
                visit</button>
            <button onClick={fda}>visit Console</button>
        </div>
    )
}

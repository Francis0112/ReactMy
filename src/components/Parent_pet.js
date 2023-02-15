import { Child_pet } from "./Child_pet"

export const Parent_pet=()=> {
    const msg_pet=(pet)=> {
        alert(`you have press ${pet}`)
    }
    return (
        <Child_pet hello={msg_pet}></Child_pet>
    )
}
import { ChildComponent } from "./ChildComponent"

export const ParentComponent=()=>{
    const greet_parent=(name)=>{
        alert(`Hello parents ${name}`)
    }
    return <ChildComponent greethandler={greet_parent}></ChildComponent>
}


export const ChildComponent=(abc)=>{
    return (
        <div>
            <button onClick={()=> abc.greethandler("onegai")}>Greetings</button>
        </div>
    )
}
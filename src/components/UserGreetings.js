

export let UserGreetings=()=> {
    let isloggedin = true
    return (
        <div>
            <p>Welcome! {isloggedin ? 'Francis':'Guest'}</p>
        </div>
    )
}
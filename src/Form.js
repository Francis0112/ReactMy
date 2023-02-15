
import { useState } from "react"
import style from './components/appStyles.module.css'

export const Form=()=> {
    const [password, setPassword] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        let pass = `${password}`
        let flag = false
        if (pass!="francis"){
            alert(`login ${flag}! try again`)
        }
        else {
            flag = true
            alert(`login ${flag}! Welcome.`)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Password:    </label>
                    <br></br>
                        <input className={style.nicebox} type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        <br></br>
                        <br></br>
                <button className={style.nicebutton} type="sumbit">Login</button>
            </form>
        </div>
    )
}
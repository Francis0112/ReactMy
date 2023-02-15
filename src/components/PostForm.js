

import { useState } from 'react'
import style from './appStyles.module.css'

export const PostForm=()=>{
    const [userId, setUserId] = useState('')
    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    const post_submit=(e)=>{
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },    
        })
        .then((response)=>response.json())
        .then((json)=>console.log(json))
    }
    return (
        <form onSubmit={post_submit}>
            <div>
                <input className={style.nicebox} type="text" value={userId} placeholder="userid" onChange={(e)=> setUserId(e.target.value)} ></input>
            </div>
                <br></br>
            <div>
                <input className={style.nicebox} type="text" value={title} placeholder="title" onChange={(e)=> settitle(e.target.value)} ></input>
            </div>
                <br></br>
            <div>
                <input className={style.nicebox} type="text" value={body} placeholder="body" onChange={(e)=> setbody(e.target.value)} ></input>
            </div>
            <br></br>
            <button className={style.nicebutton} type='sumbit'>Submit</button>
        </form>
    )
} 
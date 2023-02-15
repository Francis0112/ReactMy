import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Plant } from './components/Plant';
import { Message } from './components/Message';
import { ParentComponent } from './components/ParentComponent';
import { click_me } from './components/Click_me';
import { Parent_pet } from './components/Parent_pet';
import { UserGreetings} from './components/UserGreetings';
import { GroceryList } from './components/GroceryList';
import './components/appStyles.css';
import style from './components/appStyles.module.css';
import { Form } from './Form';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import names from './components/data.json';
import { useState, useTransition } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greet code="Java" level="9"></Greet>
        <button onClick={click_me}>Click Me</button>
        <p>children props</p>
        <Plant seed="sun seeds" flower="sun flower"></Plant>
        <Message></Message>
        <ParentComponent ></ParentComponent>
        <Parent_pet></Parent_pet>
        <UserGreetings></UserGreetings> */}
        {/* <GroceryList></GroceryList> */}
        {/* <Form></Form> */}
        {/* <PostForm ></PostForm> */}
        <Search></Search>
        {/* <PostList /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function Search() {
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const searchHandler=(event)=>{
      setInputValue(event.target.value)
      startTransition(()=> setSearch(event.target.value))
  }
  const filterNames = names.filter(item => {
    return item.fname.includes(search) || item.lname.includes(search)
  })
  return (
    <div className='App'>
      <input className={style.nicebox} type="text" value={inputValue} onChange={searchHandler} placeholder="search" ></input>
      {isPending && <p>Updating list...</p>}
      {filterNames.map((i)=>(
        <p key={i.fname}>{i.fname} {i.lname}</p>
      ))}
    </div>
  )
}
export default App;
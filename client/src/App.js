import React, { createContext , useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import { Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import ErrorPage from './components/Error_page'
import './App.css'

import { initialState,reducer } from './reducer/UseReducer'


// 1 createContext API
export const UserContext = createContext();


const Routing =()=>{
  return (
    <Routes>

    <Route exact path='/' element ={<Home/>}/>
    <Route exact path='/about' element ={<About/>}/>
    <Route exact path='/contact' element ={<Contact/>}/>
    <Route exact path='/login' element ={<Login/>}/>
    <Route exact path='/signup' element ={<Signup/>}/>
    <Route exact path='/logout' element ={<Logout/>}/>
    <Route exact path='*' element ={<ErrorPage/>}/>

    </Routes>
  )
}

const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <>
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routing/>
    </UserContext.Provider>
    </>
  )
}

export default App

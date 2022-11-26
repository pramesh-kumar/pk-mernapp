// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'

// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <NavLink className="navbar navbar-expand-lg navbar-light bg-light">
//       <NavLink className="navbar-brand" to="/navbar">Navbar</NavLink>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
//           </li>
        //   <li className="nav-item">
        //     <NavLink className="nav-link" to="/about">About</NavLink>
        //   </li>
        //   <li className="nav-item">
        //     <NavLink className="nav-link" to="/contact">Contact</NavLink>
        //   </li>
        //   <li className="nav-item">
        //     <NavLink className="nav-link" to="/login">Login</NavLink>
        //   </li>
        //   <li className="nav-item">
        //     <NavLink className="nav-link" to="/signup">Registration</NavLink>
        //   </li>
        // </ul>
        
//         </div>
//       </NavLink>
//     </>
//   )
// }

// export default Navbar



import React ,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../Images/Logo1.png'

import { UserContext } from '../App'


const Navbar = () => {
  
  const {state,dispatch} = useContext(UserContext)
  const RenderMenu =()=>{
    if(state){
      // state is true - means User has loged in and keep then logout menu 
      return(
        <>
            <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
      
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>

        </>
      )
    }
    else{
      return(
        <>
            <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
      
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Registration</NavLink>
            </li>

        </>
      )
    }
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        <img src={logo1} alt="logo1"></img>
      </NavLink>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <RenderMenu/>


        </ul>
         
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar


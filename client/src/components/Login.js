import React ,{useState,useContext}from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import loginpic from '../Images/loginpic.jpg'

import { UserContext } from '../App'

const Login = () => {

  const {state,dispatch} = useContext(UserContext)

  const navigate = useNavigate();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const loginUser=async(e)=>{
    e.preventDefault();

    const res =  await fetch("/signin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            email,password
          })

     })

     const Data  = res.json(); // Getting pending  state DATA


     if(res.status === 400 || !Data){
          window.alert("Invalid Credentials")
     }else{
          dispatch({type:"USER",payload:true})

          window.alert(" Login SuccessFully")
          console.log(Data)

          navigate('/')
     }


  }
  
  return (
    <>
    <>
    <section className='signup'>
      <div className='container mt-5'>
        <div className='signup-content'>
          
          <div className='signup-image'>
                <figure>
                  <img src={loginpic} alt="registration pic" ></img>
                </figure>

                <NavLink to='/signup' className='signup-image-link'>Create an Account </NavLink>
          </div>


          <div className='signup-form'>
            <h2 className='form-title'>Login</h2>
            <form method='POST' className='register-form' id='register-form'>

              <div className='form-group'>
                <label htmlFor='email'>
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" id='email' name='email' placeholder='Enter your Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete='off' />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" id='password' name='password' placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete='off' />
              </div>

              <div className='form-group form-button'>
                <input type='submit' name='signin' id='signin' className='form-submit' value='Log In'
                onClick={loginUser}/>
              </div>

            </form>

          </div>


        </div>
      </div>

    </section>
    </>
    </>
  )
}

export default Login
import React,{useEffect,useState} from 'react'
import pms_pic from '../Images/pramesh_pic.jpeg'

import {useNavigate} from 'react-router-dom'



const About = () => {

  const [userData,setUserData]= useState({})


  const navigate = useNavigate();

  const classAboutPage=async()=>{
      try{
          const res =  await fetch("/about",{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include",

        })
        
        const data =await res.json();
        console.log(data)
        // setting for userData using useState
        setUserData(data)


        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }

      }catch(err){
        console.log(err)
        navigate('/login')
      }

  }

  useEffect(() => {
    classAboutPage();
    
  }, [])
  

  return (
    <>
       <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>

            <div className='col-md-4'>
              <img src={pms_pic} alt='myPic'></img>
            </div>

            <div className='col-md-6'>
              <div className='profile_head'>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>

                <p className='profile_rating mt-3 mb-5'>
                  RANKING: <span>1/10</span>
                </p>


              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#home">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#profile">TimeLine</a>
                </li>
            
              </ul>


                
              </div>
            </div>

              <div className='col-md-2'>
                <input type="submit" className='edit_profile_btn' name='btnAddMore' value='Edit Profile'></input>
              </div>
          </div>

          <div>

          </div>


          <div className='row about_page'>

            {/* left side url  */}
            <div className='col-md-4 '>
              <div className='profilr_work'>
                <p> PROFILE LINK</p>
                <a href='https://github.com/pramesh-kumar ' target='_blanck'>Github</a>
                <br/>
                <a href='https://www.linkedin.com/in/pramesh-kumar/' target='_blanck'>Linkedin</a>


              </div>

            </div>

            {/* right side url  */}

            <div className='col-md-8 pl-5 about-info'>
              

            <div className='row'>
            
                  
                <div class="tab-content">
                  <div class="tab-pane container active" id="home">
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>User_ID</label>
                      </div>

                      <div className='col-md-6 data_right_side'>
                        <p>{userData._id}</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Name</label>
                      </div>

                      <div className='col-md-6 data_right_side'>
                        <p>{userData.name}</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Email</label>
                      </div>

                      <div className='col-md-6 data_right_side'>
                        <p>{userData.email}</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Phone</label>
                      </div>

                      <div className='col-md-6 data_right_side'>
                        <p>{userData.phone}</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Profession</label>
                      </div>

                      <div className='col-md-6 data_right_side'>
                        <p>{userData.work}</p>
                      </div>
                    </div>
                  </div>


                  <div class="tab-pane container fade" id="profile">
            
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Experience</label>
                      </div>

                      <div className='col-md-6'>
                        <p>Fresher</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Total Project</label>
                      </div>

                      <div className='col-md-6'>
                        <p>10</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>English Level</label>
                      </div>

                      <div className='col-md-6'>
                        <p>Expert</p>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Availability</label>
                      </div>

                      <div className='col-md-6'>
                        <p>6 Months</p>
                      </div>
                    </div>


                  </div>
                </div>
 

            </div>

            </div>


          </div>


        </form>

       </div>
    </>
  )
}

export default About
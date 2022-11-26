import React,{useState,useEffect} from 'react'

const Home = () => {

  const [userName,setUserName]= useState()
  const [show,setShow]= useState(false)


  const userHomePage=async()=>{
      try{
          const res =  await fetch("/getdata",{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },

        })
        
        const data =await res.json();
        console.log(data)
        // setting for userData using useState
      
        setUserName(data.name)
        setShow(true)

      }catch(err){
        console.log(err)
      }

  }

  useEffect(() => {
    userHomePage();
    
  }, [])

  return (
    <>
    <div className='home_page home_bg row'>
    
      <div className='home-div'>
        <p className='pt-5'>Welcome</p>
        <h1>{userName}</h1>
        
        <h2>{show ? 'Happy to See You Back' : 'We Are The MERN Developer'}</h2>
      </div>

    </div>
    </>
  )
}

export default Home
import React,{useEffect,useState} from 'react'

 
const Contact = () => {

   const [userData,setUserData]= useState({name:"",email:"",phone:"",message:""})

  const useContact=async()=>{
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
      
        setUserData({...userData,name:data.name,email:data.email,phone:data.phone })



        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }

      }catch(err){
        console.log(err)
      }

  }

  useEffect(() => {
    useContact();
    
  }, [])


  // we are storing data in state

  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData,[name]:value})
  }


  // Send data to backend 

  const sendContactData =async(e)=>{
    e.preventDefault();

    const {name,email,phone,message}= userData;

    const res = await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })

    const data =await res.json();

    if(!data){
      console.log("Message Not Send")
    }else{
      alert("Message Sent Successfully")
      // Making message field Empty 
      setUserData({...userData,message:""})
    }




  }




  return (
    <>
    <div className='contact_info'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>

            {/* phone Number */}
            <div className='contact_info_item d-flex justify-content-start align-items-center '>
              <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'></img>
              <div className='px-2 contact_info_content'>
                <div className='contact_info_title'>
                  Phone
                </div>
                <div className='contact_info_text'>
                  +91 1111 543 2198
                </div>
              </div>
            </div>
            {/* Email */}
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'></img>
              <div className='px-2  contact_info_content'>
                <div className='contact_info_title'>
                  Email
                </div>
                <div className='contact_info_text'>
                  user@gmail.com
                </div>
              </div>
            </div>
            {/* Address */}
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'></img>
              <div className='px-2  contact_info_content'>
                <div className='contact_info_title'>
                  Address
                </div>
                <div className='contact_info_text'>
                  India
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    {/* contact us form  */}

    <div className='contact_form'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
                <div className='contact_form_container py-5'>
                    <div className='contact_form_title'>
                      Get in Touch
                    </div>
                    <form method='POST' id='contact_form'>
                      <div className='contact_form_name d-flex justify-content-between align-items-center'>

                          <input type="text" id='contact_form_name'
                          className='contact_form_name input_filed'
                          value={userData.name}
                          onChange={handleInputs}
                          name="name"
                          placeholder='Your Name' required="true">
                            
                          </input>

                          <input type="email" id='contact_form_email'
                          className='contact_form_email input_filed'
                          value={userData.email}
                          onChange={handleInputs}
                          name="email"
                          placeholder='Your Email' required="true">
                            
                          </input>

                          <input type="number" id='contact_form_phone'
                          className='contact_form_phone input_filed'
                          value={userData.phone}
                          onChange={handleInputs}
                          name="phone"
                          placeholder='Your Phone Number' required="true">
                            
                          </input>

                      </div>

                      <div className='contact_form_text mt-5'>
                          <textarea className='text_field contact_form_message' 
                          value={userData.message}
                          onChange={handleInputs}
                          name="message"
                           placeholder='Message ...' cols="70" rows="10"></textarea>
                      </div>


                      <div className='contact_form_button mt-2'>
                         <button type='submit' className='button contact_submit_button'
                         onClick={sendContactData}>
                          Send Message
                         </button>
                      </div>

                    </form>
                </div>
          </div>


        </div>
      </div>

    </div>
    </>
  )
}

export default Contact
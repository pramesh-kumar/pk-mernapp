import React from 'react'

import error_img from '../Images/pageError.png'

export const Error_page = () => {
  return (
    <>
        {/* <h1>This is Error Page </h1> */}

        <div class="container-fluid main_header ">
        <div class="row">
                <div class="col-md-10 col-12 mx-auto ">
                    <div class="row">
                        
                        <div class="col-md-12 col-12 main_header_left align-items-center  text-center">
                            <figure class="errorpage">
                                <img src={error_img} alt="pramesh" class="img-fluid" title="I_Pramesh"/>
                            </figure>
                            <p>Welcome to MERN APP</p>
                            <h1>We Are Sorry, Page Not Found !!</h1>
                            <a href="/"><button >Go Back</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </>

  )
}

export default Error_page;
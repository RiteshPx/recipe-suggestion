import React from 'react'
import { CTAButton } from '../components/cors/CTAbutton'
import { aApi } from '../api/fetchApi'

export const Home = () => {
  return (
    <div>
        <h2>home</h2>
        {/* <CTAButton active={true} linkto={"/signup"}>
            Learn More  </CTAButton> */}

         <button onClick={aApi}></button>   

    </div>
  )
}

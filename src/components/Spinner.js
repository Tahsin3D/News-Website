import React from 'react'
import spinner from "./images/Spinner.gif"

const Spinner = () => {
    return (
        <div  className="container text-center">
                  <img style={{width:"60px", borderRadius:"50%"}} src={spinner} alt="..." />
        </div>
    )
  }

  export default Spinner;
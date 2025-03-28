import React from 'react'
import { useLocation } from 'react-router-dom';

function Recipt() {
    
const location = useLocation();
const data  = location.state || {};
console.log(data)


  return (
    <div>Recipt
       
    </div>
  )
}
export default Recipt
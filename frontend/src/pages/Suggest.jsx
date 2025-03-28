import React, { useState } from 'react'

const Suggest = () => {
    const [msg,setmsg]=useState([])
    const hanndlermsg = (e)=>{
        setmsg(e.target.value)
    }

const handlerSend =(e)=>{
    e.preventDefault()
    console.log(msg)

}
  return (
    <div className=''>
        <h1 className='text-xl font-bold'>Write your ingredients here.</h1>
        <form onSubmit={handlerSend}>
            <input type="text" placeholder='Enter incrident'
            value={msg} className='h-[]'
            onChange={hanndlermsg}/>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Suggest
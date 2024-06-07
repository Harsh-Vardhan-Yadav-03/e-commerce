import React from 'react'
import Navbar from '../components/Navbar'

const login = () => {
  return (
    <>
    <Navbar/>
    <div className=' bg-slate-600'>
        <h1> Login </h1>
        <form className=''>
            <label for="username" className=''> Username </label>
            <input type="text" name="username" id="username" />
            <label for="password"> Password </label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
            </form>
    </div>
    </>
  )
}


export default login
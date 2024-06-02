import React from 'react'

const login = () => {
  return (
    <>
    <div className=' bg-slate-600'>
        <h1> Login </h1>
        <form className=''>
            <label for="username" className=' text-red-900'> Username </label>
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
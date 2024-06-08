import React from 'react'
import Navbar from '../components/Navbar'

const login = () => {
  return (
    <>
      <Navbar />
      <div className=''>

        <form className='flex items-center flex-col border-2 bg-slate-300 border-black w-[35vw] h-[40rem] m-5'>
          <div className=' font-semibold text-7xl p-[70px]'>Login</div>
          <div className=' w-[30vw]'>
            Don't have an account? Create Your Account it takes less than a minute
          </div>
          <div className=' m-5 flex flex-col w-[25vw] gap-8'>
            <input type="text" name="username" id="username" placeholder='username' className='focus:outline-none bg-slate-300 p-[10px] border-b-4 border-slate-600 '  />
            <input type="password" name="password" id="password" placeholder='password' className='focus:outline-none bg-slate-300 p-[10px] border-b-4 border-slate-600'  />
          </div>
          <div className=' p-5'>
            forgot password?
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  )
}


export default login
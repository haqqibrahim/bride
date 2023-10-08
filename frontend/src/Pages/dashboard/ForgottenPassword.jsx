import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios'
import Footer from '../../Components/Footer'

function ForgottenPassword() {
    const [email,setEmail]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault()
        axios.post("http://localhost:3001/api/user/forgotPassword",{email})
.then((res)=>{
  toast.success(res.data.message)
  setEmail("")
navigate("/dashboardlogin")
})
.catch((err)=>{
        toast.error(err.response.data.message)
      })
    }
  return (
    <>
    <section className='px-5 lg:px-0'>
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
<h3 className="text-green-200  text-[22px] text-center leading-9 font-bold mb-10">
<span className='text-green-200 '>Forgotten</span> Password ?
</h3>
<form className="py-4 md:py-0" onSubmit={handleSubmit}>
<div className="mb-5">
<input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' required/>
</div>

<div className='mt-7'>
<button type='submt' className='w-full bg-green-600 rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Send</button>
</div>
<p className="mt-5 text-green-200 text-center">
<Link to="/dashboardlogin" className='text-green-200 font-medium ml-1'>Never Mind</Link><br/>
</p>

</form>
</div>
    </section>
    <Footer/>
    </>
  )
}
export default ForgottenPassword
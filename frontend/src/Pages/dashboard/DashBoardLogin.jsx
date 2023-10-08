import  { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UseDashboardAuthContext } from "../../context/DashBoardAuthContext";
import { toast } from "react-toastify";
import axios from 'axios';
// import { useAdminLogin } from '../../hooks/useAdminLogin'
import Footer from '../../Components/Footer'
import { server } from '../../server';

function DashBoardLogin() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {dispatch}=UseDashboardAuthContext()
  // const {adminlogin,isLoading,error}=useAdminLogin()
const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
try {
  const response=await axios.post(`${server}/getMembers/`,{email,password})  
  if (response.status===200) {
    const json=response.data;
    localStorage.setItem('useradmin',JSON.stringify(json))
    dispatch({type:'LOGINADMIN',payload:json})
    navigate("/dashboard")
}    
} catch (error) {
  if (error.response) {
    toast.error(error.response.data)
 }   

}
// await adminlogin(email,password)
// navigate("/dashboard")
  }
return (
  <>
   <section className='px-5 lg:px-0'>
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
<h3 className="text-green-200  text-[22px] text-center leading-9 font-bold mb-10">
Admin? <span className='text-green-200 '>Welcome</span> Back 🎉
</h3>
<form className="py-4 md:py-0" onSubmit={handleSubmit}>
<div className="mb-5">
<input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' required/>
</div>
<div className="mb-5">
<input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' required/>
</div>

<div className='mt-7'>
<button type='submt' className='w-full bg-green-600 rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Login</button>
</div>
<p className="mt-5 text-white text-center">
Forgotten Password? <Link to="/forgottenPassword" className='text-green-200 font-medium ml-1'>Click Here</Link>
</p>
</form>
</div>
  </section>
  <Footer/>
  </>
)
}
export default DashBoardLogin
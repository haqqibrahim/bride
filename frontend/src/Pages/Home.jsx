import {server} from "../server"
import brideLogo from "../asset/images/brideLogo.png"
import Footer from "../Components/Footer"
import  { useState } from 'react'
import { toast } from "react-toastify";
import {AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';

function Home() {

const [fullname,setFullName]=useState('')
const [email,setEmail]=useState('')
const [phoneNumber,setPhoneNumber]=useState("")
const [gender,setGender]=useState("")
const [dateOfBirth,setDateOfBirth]=useState('')
const [dateOfJoining,setDateOfJoining]=useState("")
const [maritalStatus,setMaritalStatus]=useState("")
const [address,setAddress]=useState("")
const [nearestBustop,setNearestBusStop]=useState("")
const [cellUnit,setCellUnit]=useState("")
const [member,setMember]=useState("")
const [department,setDepartment]=useState("")
const [prayergroup,setPrayerGroup]=useState('')
const [fellowship,setFellowShip]=useState("")
const [nextOfKin,setNextOfKin]=useState("")
const [nextOfKinAddress,setNextOfKinAddress]=useState("")
const [nextOfKinMaritalStatus,setNextOfKinMaritalStatus]=useState("")
const [nextOfKinPhoneNumber,setNextOfKinPhoneNumber]=useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  axios.post(`${server}/registerMembers`, {
    fullname, email, phoneNumber, gender, dateOfBirth, dateOfJoining, maritalStatus, address, nearestBustop, cellUnit, member, department, prayergroup, fellowship, nextOfKin, nextOfKinAddress, nextOfKinMaritalStatus, nextOfKinPhoneNumber
  })
    .then((res) => {
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setGender("");
      setDateOfBirth("");
      setDateOfJoining("");
      setMaritalStatus("");
      setAddress("");
      setNearestBusStop("");
      setCellUnit("");
      setMember("");
      setDepartment("");
      setPrayerGroup("");
      setFellowShip(""); 
      setNextOfKin("");
      setNextOfKinAddress("");
      setNextOfKinMaritalStatus("");
      setNextOfKinPhoneNumber("");
      toast.success(res.data.message)
        window.location.reload(true);

    }).catch((error) => {
      toast.error(error.response.data.message);
    })
};
  return (
    <>
    <div className="flex justify-center items-center py-2 ">
      <img
        src={brideLogo}
        alt="Bride Logo"
        className="w-64 h-64l "
      />
    </div>  
<div className='max-w-[400px] mx-auto  px-4  py-2'>

<form onSubmit={handleSubmit}>
  <div className='my-4'>
    <label className='text-green-200'>Full Name</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type='text' value={fullname}  onChange={(e) => setFullName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>

  <div className='my-4'>
    <label className='text-green-200'>Email</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
      <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
    </div>
  </div>

  <div className='my-4'>
    <label className='text-green-200'>Phone Number</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="number" value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>

  <div className='my-4'>
<label className='text-green-200'>Gender</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select value={gender}
onChange={(e) => setGender(e.target.value)}
className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'>
  <option value='choose'>Choose</option>
<option value='Male'>Male</option>
<option value='Female'>Female</option>
</select>
</div>
</div>

  <div className='my-4'>
    <label className='text-green-200'>Date Of Birth</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="date" value={dateOfBirth}  onChange={(e) => setDateOfBirth(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none required' />
    </div>
  </div>

  <div className='my-4'>
    <label className='text-green-200'>Date Of Joining</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="date"   onChange={(e) => setDateOfJoining(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
    </div>
  </div>

  <div className='my-4'>
<label className='text-green-200'>Marital Status</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select 
onChange={(e) => setMaritalStatus(e.target.value)}
className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'
>
<option value='choose'>Choose</option>
<option value='Married'>Married</option>
<option value='Single'>Single</option>
</select>
</div>
</div>

  <div className='my-4'>
    <label className='text-green-200'>Address</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="text"  onChange={(e) => setAddress(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>

  <div className='my-4'>
    <label className='text-green-200'>Landmark/Nearest Bustop</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="text"  onChange={(e) => setNearestBusStop(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>


  <div className='my-4'>
    <label className='text-green-200'>Cell Unit</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type='text'   onChange={(e) => setCellUnit(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>

<div className='my-4'>
<label className='text-green-200'>Member</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select 
onChange={(e) => setMember(e.target.value)}
className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'
>
<option value='choose'>Choose</option>
<option value='Online/Virtual'>Online/Virtual</option>
<option value='Physical'>Physical</option>
</select>
</div>
</div>


  <div className='my-4'>
<label className='text-green-200'>Department/Group</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select 
onChange={(e) => setDepartment(e.target.value)}
className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'>
    <option value='choose'>Choose</option>
<option value='Media'>Media</option>
<option value='Music'>Music</option>
<option value='Security'>Security</option>
<option value='Maintenance'>Maintenance</option>
<option value='Deacon'>Deacon</option>
<option value='Elders Council'>Elders Council</option>
<option value='Marriage Committee'>Marriage Committee</option>
<option value='Protocol'>Protocol</option>
<option value='Legal'>Legal</option>
<option value='Coordinating'>Coordinating</option>
<option value='Medical'>Medical</option>
<option value='Welfare'>Welfare</option>
<option value='Sanitization'>Sanitization</option>
<option value='Special Group'>Special Group</option>
<option value='Other'>Other</option>
</select>
</div>
</div>

<div className='my-4'>
<label className='text-green-200'>Prayer Group</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select 
onChange={(e) => setPrayerGroup(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'>
<option value='choose'>Choose</option>
<option value='Rehoboth'>Rehoboth</option>
<option value='Bethel'>Bethel</option>
<option value='Pillar of Fire'>Pillar of Fire</option>
<option value='Harvesters'>Harvesters</option>
<option value='Strong Tower'>Strong Tower</option>
<option value='Daughters of Philip'>Daughters of Philip</option>
<option value='Daughters Of Zion'>Daughters of Zion</option>
<option value='Overcomers'>Overcomers</option>
<option value='Other'>Other</option>
</select>
</div>
</div>

<div className='my-4'>
<label className='text-green-200'>FellowShip</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select
onChange={(e) => setFellowShip(e.target.value)}
className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'
>
<option value='choose'>Choose</option>
<option value='Children'>Children</option>
<option value='Youth'>Youth</option>
<option value='Men'>Men</option>
<option value='Women'>Women</option>
</select>
</div>
</div>

<div className='my-4'>
    <label className='text-green-200'>Next Of Kin</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="text" value={nextOfKin}  onChange={(e) => setNextOfKin(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>

  <div className='my-4'>
    <label className='text-green-200'>Next Of Kin Address</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="text" value={nextOfKinAddress}  onChange={(e) => setNextOfKinAddress(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
    </div>
  </div>

  <div className='my-4'>
  <label className='text-green-200'>Next Of Kin Marital Status</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select 
onChange={(e) => setNextOfKinMaritalStatus(e.target.value)}
className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'
>
<option value='choose'>Choose</option>
<option value='Married'>Married</option>
<option value='Single'>Single</option>
</select>
</div>
  </div>

  <div className='my-4'>
    <label className='text-green-200'>Next Of Kin Number</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type="number" value={nextOfKinPhoneNumber}  onChange={(e) => setNextOfKinPhoneNumber(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none ' />
    </div>
  </div>
  <button className='w-full my-2 p-3 bg-green-600  rounded-2xl shadow-xl text-white' type='submit' >Submit</button>
</form>
</div>
<Footer/>
    </>
  )
}
export default Home
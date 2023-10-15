import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAdminLogout } from '../../hooks/useAdminLogout';
import { server } from '../../server';

function DashBoard() {
  const [searchText,setSearchText]=useState('');
  const [members,setMembers]=useState([])
  const navigate=useNavigate()
  const {adminlogout}=useAdminLogout()

  axios.get(`${server}/dashboard/getMembers`)
 .then(result=>setMembers(result.data))
 .catch(err=>console.log(err))

 const handleLogout=async(e)=>{
e.preventDefault()
await adminlogout()
navigate("/dashboardlogin")
}

  return (
<div className='w-full h-screen'>
      <div className='border border-secondary rounded-2xl shadow-xl bg-primary px-2 w-full  my-10'>
 
   <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h2 className='text-2xl font-bold my-2 text-green-200'>Bride Of Christ</h2>
        <form>
        <input type='text' placeholder='Search a Person' 
        value={searchText}
onChange={(e)=>setSearchText(e.target.value)} 
className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl outline-none'
/>    
</form>
</div>

        <table className='w-full border-collapse text-center'>
          <thead>
            <tr className='border-b'>
              <th className='text-white'>#</th>
              <th className='text-left text-white text-xs'>FullName</th>
              <th className='text-white text-xs'>Email</th>
              <th className='hidden md:table-cell text-white text-xs'>Phone Number</th>
              <th className='hidden sm:table-cell text-white text-xs'>Gender</th>
              <th className='hidden sm:table-cell text-white text-xs'>Date Of Birth</th>
              <th className='hidden sm:table-cell text-white text-xs'>Joined</th>
              <th className='hidden sm:table-cell text-white text-xs'>Marital Status</th>
              <th className='hidden sm:table-cell text-white text-xs'>Address</th>
              <th className='hidden sm:table-cell text-white text-xs'>Bus Stop</th>
              <th className='hidden sm:table-cell text-white text-xs'>Cell Unit</th>
              <th className='hidden sm:table-cell text-white text-xs'>Member</th>
              <th className='hidden sm:table-cell text-white text-xs'>Department</th>
              <th className='hidden sm:table-cell text-white text-xs'>Prayer Group</th>
              <th className='hidden sm:table-cell text-white text-xs'>FellowShip</th>
              <th className='hidden sm:table-cell text-white text-xs'>Next Of Kin</th>
              <th className='hidden sm:table-cell text-white text-xs' >Next Of Kin Address</th>
              <th className='hidden sm:table-cell text-white text-xs'>Next Of Kin M/Status</th>
              <th className='hidden sm:table-cell text-white text-xs'>Next Of Kin No.</th>
            </tr>
          </thead>

          <tbody>
            {members.length>0 ?( 
                members.filter((item)=>{
                  return searchText.toLowerCase()==='' ? item :item.fullname.toLowerCase().includes(searchText)
                })
                .map((member,index)=>(
                  <tr key={member.id}>
                  <td className='text-white text-xs'>{index+1}.</td>
                  <td className='text-left text-white text-xs'>{member.fullname}</td>
                  <td className='text-white text-sm'>{member.email}</td>
                  <td className='text-white text-sm'>{member.phoneNumber}</td>
                  <td className='text-white text-sm'>{member.gender}</td>
                  <td className='text-white text-sm'>{member.dateOfBirth}</td>
                  <td className='text-white text-sm'>{member.dateOfJoining}</td>
                  <td className='text-white text-sm'>{member.maritalStatus}</td>
                  <td className='text-white text-sm'>{member.address}</td>
                  <td className='text-white text-sm'>{member.nearestBustop}</td>
                  <td className='text-white text-sm'>{member.cellUnit}</td>
                  <td className='text-white text-sm'>{member.member}</td>
                  <td className='text-white text-sm'>{member.department}</td>
                  <td className='text-white text-sm'>{member.prayergroup}</td>
                  <td className='text-white text-sm'>{member.fellowship}</td>
                  <td className='text-white text-sm'>{member.nextOfKin}</td>
                  <td className='text-white text-sm'>{member.nextOfKinAddress}</td>
                  <td className='text-white text-sm'>{member.nextOfKinMaritalStatus}</td>
                  <td className='text-white text-sm'>{member.nextOfKinPhoneNumber}</td>

                  </tr>
                ))):( 
                <tr>
                <td colSpan="6" className="text-center py-4 text-white">No Record Found</td>
              </tr>          
            )}
          </tbody>
        </table>
      </div>

      <div className='text-center'>
      <button  className='bg-green-600 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl' onClick={handleLogout} >Logout</button>
</div>

    </div>  )
}
export default DashBoard

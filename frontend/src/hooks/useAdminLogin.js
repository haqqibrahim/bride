import { useState } from "react";
import { UseDashboardAuthContext } from "../context/DashBoardAuthContext";
import { toast } from "react-toastify";
import axios from 'axios';
import {server} from "../server"

export const useAdminLogin=()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(null)
   const {dispatch}=UseDashboardAuthContext()

   const adminlogin=async(email,password)=>{
    setIsLoading(true);
    setError(null);
try {
const response=await axios.post(`${server}/getMembers/`,{email,password})  

if (response.status===200) {
    const json=response.data;
    localStorage.setItem('useradmin',JSON.stringify(json))
    dispatch({type:'LOGINADMIN',payload:json})
    setIsLoading(false)
}    
} 
catch (error) {
if (error.response) {
    toast.error(error.response.data)
 }   
}
}
return {adminlogin,isLoading,error}
}
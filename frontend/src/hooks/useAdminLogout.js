import { UseDashboardAuthContext } from "../context/DashBoardAuthContext";
export const useAdminLogout=()=>{
const {dispatch}=UseDashboardAuthContext()
const adminlogout=()=>{
    localStorage.removeItem('useradmin')
    //dispatch logout action in the auth context
    dispatch({type:'LOGOUTADMIN'})
}
return {adminlogout}
}
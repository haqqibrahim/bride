import {createContext,useReducer,useEffect, useContext} from "react"
export const DashboardAuthContext=createContext()

export const authReducer=(state,action)=>{
    switch (action.type) {
        case 'LOGINADMIN':
         return {useradmin:action.payload}            
    
         case 'LOGOUTADMIN':
            return {useradmin:null}            
   
        default:
return state
    }
}
export const DashboardAuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(authReducer,{
        //There's a value:it's just empty
        useradmin:null
    })
    //checks the local storage once the components mounts on the browser to see if there's any user/value
useEffect(()=>{
    const useradmin=JSON.parse(localStorage.getItem('useradmin'))//converts the item in the local storage into an object and store the value in the user variable
    if (useradmin) {
        dispatch({type:'LOGINADMIN',payload:useradmin})
    }

},[])
console.log('DashBoardAuthContext state:', state)

return(
    <DashboardAuthContext.Provider value={{...state,dispatch}}>
        {children}
    </DashboardAuthContext.Provider>
)
}
export const UseDashboardAuthContext=()=>{
return useContext(DashboardAuthContext)
}
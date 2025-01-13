import "./App.css"
 import {   RouterProvider } from 'react-router'

 import {  useReducer } from "react"
 import { UserReducer, initialState, userCotext } from "./models/User";
import { myRouter } from "./components/MyRouter"


 

 
function App() {
  localStorage.clear()
  const [userSite,DispachUser]=useReducer(UserReducer,initialState)
  return (
     <>
    
     <userCotext.Provider value={[userSite,DispachUser]}>
     <RouterProvider router={myRouter} />
    </userCotext.Provider>
    </>
  )
}

export default App

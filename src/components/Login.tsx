import {   Button, Modal } from "@mui/material"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { userCotext } from "./models/User"



const Login=()=>{
  const [,DispachSiteUser]=useContext(userCotext)
  let  [user,setuser]=useState({name:"",password:""})
 //let  [password,setpassword]=useState("")
 const [toLog,setToLog]=useState(false)
const handleClose=()=>{setToLog(false)}
const handleSubmit=(e: FormEvent)=>
{
  
  handleClose()
    console.log(user);   
    e.preventDefault()
    let user2=JSON.stringify(localStorage.getItem("user"))
    let user3=JSON.stringify(user)
    if(!user2||(user3!=user2))
    {
      localStorage.setItem("Login","false")
      localStorage.setItem("user",JSON.stringify(user))
      DispachSiteUser({type:"POST",field:{_name:user.name,_password:user.password}})
      localStorage.setItem("userLetter",user.name[0])
    }
    


}
const Changeuser=(e:ChangeEvent<HTMLInputElement>)=>{
  const {id, value } = e.target
    
  setuser({ ...user, [id]: value })
}
  
   const LogTosite=()=>{
    setToLog(true)
    localStorage.setItem("Login","true")
   }
    return(<>
    
      {localStorage.getItem("Login")?"":
      <Button variant="outlined" onClick={LogTosite}>Log in</Button>}
    { 
   <Modal open={toLog}>
    <form onSubmit={handleSubmit}>
   <input type="text" value={user.name} id="name" onChange={Changeuser}/>
   <input type="text" value={user.password} id="password" onChange={Changeuser}/>
   <button type="submit">Login</button>
   </form>
   </Modal>}
  
      




    
  
 {/* <h1>close the log and add pratim and avater</h1> */}
  </>
  )


}
export default Login



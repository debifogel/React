import {   Button, Input, Modal,  } from "@mui/material"
import { ChangeEvent, FormEvent,useContext, useState } from "react"
import { userCotext } from "../models/User"
const Login=()=>{
  const [userSite,DispachSiteUser]=useContext(userCotext)
  let  [user,setuser]=useState({name:"",password:"",email:""})
 //let  [password,setpassword]=useState("")
 const [toLog,setToLog]=useState(false)
const handleClose=()=>{setToLog(false)}
const handleSubmit=async (e: FormEvent)=>
{
  
  handleClose()
    console.log(user);   
  e.preventDefault()
  try {
       const res= await fetch('http://localhost:3000/api/user/login',
        {
           method: 'POST',
            body: JSON.stringify({
                _email:user.email,
                _password:user.password
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const data = await res.json()
        if (res.status == 401) { alert('מייל  או סיסמא לא נכונים') }
            else if (!res.ok) {console.log("in not good user");
             throw new Error(`fetch error ${res.status}`) }
          
          

            //setuser(data.user)
          DispachSiteUser({type:"POST",field:data.user})
          console.log(userSite);
               
      }
      catch(e)
      {
         console.log(e+"fetch fail");
         
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
    
      {userSite._id==0&&
      <Button variant="outlined" onClick={LogTosite}>Log in</Button>}
    { 
   <Modal open={toLog} >
    <form onSubmit={handleSubmit}>
   <Input type="text" value={user.name} id="name" onChange={Changeuser}/>
   <Input type="text" value={user.password} id="password" onChange={Changeuser}/>
   <Input type="email" value={user.email} id="email" onChange={Changeuser}/>
   <button type="submit">Login</button>
   </form>
   </Modal>}
  {/* <h1>close the log and add pratim and avater</h1> */}
  </>
  )
}
export default Login



import { Avatar, Box, Button, Modal, TextField } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import {  useContext, useEffect, useRef, useState } from "react";
import {  userCotext } from "../models/User";

const Profil= ()=>{
    
    const [userSite,DispachSiteUser]=useContext(userCotext)
    const[toUpdate,setToUpdate]=useState(false)
    const[letter,setLetter]=useState(userSite._name||" ")
    const name = useRef<HTMLInputElement>(null);
    const familyName = useRef<HTMLInputElement>();
    const email = useRef<HTMLInputElement>();
    const address = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    
    
    const upDateDetails=()=>{setToUpdate(true)}
    const toserver=async()=>{
      try{
        const res = await fetch('http://localhost:3000/api/user', {
        method: 'PUT',        
          headers: {
            'Content-Type': 'application/json',
             "user-id":JSON.stringify(1) }
            ,body: JSON.stringify(userSite)})
          const  data= await res.json()
          console.log(data.user);
          if(res.status==403){console.log("403 in profil update without id");
          }
           if (!res.ok) { throw new Error(`fetch error ${res.status}`) 
          }
           
      }
        
      catch(e)
          {
            console.log(e);
            
          }
    }
    const handleSubmit= ()=>{
      setToUpdate(false)
       DispachSiteUser({
        type: "UPDATE", field: {
          _name: name.current?.value||userSite._name,
          _familyname: familyName.current?.value||userSite._familyname,
          _address: address.current?.value||userSite._address,
          _email: email.current?.value||userSite._email,
          _password: password.current?.value||userSite._password,
          _phone: phone.current?.value||userSite._phone
        }
      })
      //this is not change alwayes!!
    }
    useEffect(() => {
      if(userSite._id==0){return}
      toserver()
     console.log("profil now site user",userSite);     
     setLetter((userSite._name??" ")[0])
     console.log("letter",letter);
 },[userSite])
 useEffect(() => {
  setLetter(" ") 
 })
    return (<>

      
        <Button onClick={upDateDetails} sx={{borderRadius:"30px"}} >    
          <Avatar sx={{ bgcolor: deepPurple[500] }}> {letter}</Avatar>
        </Button>
    <Modal open={toUpdate} sx={{  width: 300,position:"fixed",left:"300px"}}>
    <Box >
   <form onSubmit={handleSubmit} >

<TextField label='name' id="_name" inputRef={name} />
<TextField label='familyname' id="_familyname" inputRef={familyName}/>
<TextField type="email" label="email" id="_email" inputRef={email}/>
<TextField label='password' id="_password" inputRef={password}/>
<TextField label='adress' id="_adress" inputRef={address}/>
<TextField label='phone' id="_phone" inputRef={phone}/>


<button type="submit">UPDATE</button>
</form>
    
    
  </Box>
    
   </Modal>
     
      </>)
}
export default Profil



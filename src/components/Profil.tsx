import { Avatar, Box, Button, Modal, TextField } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import {  useContext, useRef, useState } from "react";
import { userCotext } from "./models/User";

const Profil=()=>{
    
    const [siteUser,DispachSiteUser]=useContext(userCotext)
    const[toUpdate,setToUpdate]=useState(false)
    const name = useRef<HTMLInputElement>(null);
    const familyName = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const address = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    
    
    const upDateDetails=()=>{setToUpdate(true)}
    const handleSubmit=()=>{setToUpdate(false)
        
        
        DispachSiteUser({type:"UPDATE",field:{_name:name.current?.value||siteUser._name
            ,_familyname:familyName.current?.value||siteUser._familyname,
            _address:address.current?.value||siteUser._address
            ,_email:email.current?.value||siteUser._email,
            _password:password.current?.value||siteUser._password
            ,_phone:phone.current?.value||siteUser._phone 
         } 
        })
        localStorage.setItem("userLetter",(name.current?.value||siteUser._name+"")[0])
    }
    return (<>

      
        <Button onClick={upDateDetails} sx={{borderRadius:"30px"}} >    
          <Avatar sx={{ bgcolor: deepPurple[500] }}> {localStorage.getItem("userLetter")}</Avatar>
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



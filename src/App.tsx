import { Grid2 as Grid } from "@mui/material"
import "./App.css"
import Login from "./components/Login"
import Profil from "./components/Profil"
 import {  useReducer } from "react"
 import { UserReducer, initialState, userCotext } from "./components/models/User";
 
 
 

function App() {
  const [userSite,DispachUser]=useReducer(UserReducer,initialState)
  return (
     <>
     <userCotext.Provider value={[userSite,DispachUser]}>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid size={{ xs: 4, md: 4 }} offset={{ xs: 3, md: 0 }}>
      <Profil/>
      <Login />
      </Grid>
      <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
        <h1>home</h1>
      </Grid>
      <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>   
      </Grid>
      <Grid size={{ xs: 'grow', md: 6 }} offset={{ md: 2 }}>
        
      </Grid>
    </Grid>
    </userCotext.Provider>
    </>
  )
}

export default App

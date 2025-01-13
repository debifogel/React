import { Link } from "react-router"
import Login from "./Login"
import Profil from "./Profil"
import { Grid2 as Grid } from "@mui/material"

export const AppLayot=()=>
{
    return(<>
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
    <nav>          
        <Link to='/'>Home</Link> |
        {/* <Link to='/Login'>Login</Link> | */}
        <Link to='About'>about</Link> |
        <Link to='private'>private</Link> |
        
        </nav>
        <Profil/>
      <Login/>
      <Grid size={{ xs: 4, md: 4 }} offset={{ xs: 3, md: 0 }}>      
      </Grid>
      <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
        <h1>home</h1>
      </Grid>
      <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>   
      </Grid>
      <Grid size={{ xs: 'grow', md: 6 }} offset={{ md: 2 }}>       
      </Grid>
    </Grid>
    </>)
}
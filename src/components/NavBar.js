import React from 'react'
import { AppBar,Toolbar,Typography,styled,InputBase} from '@mui/material'
const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:'blue'
   });
  const Search = styled("div")({
    background:'white',
    padding:"0 10px",
    width:"50%"
  });
 
    
  return (
    <>
         <AppBar position="static"  sx={{boxShadow:'none', backgroundColor:'white'}}>
        <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block" }}}>Home</Typography>
         <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>About</Typography>
         <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Contact Us</Typography>
         <Search><InputBase placeholder="Search...."/></Search>
        </StyledToolbar>
     
         
         </AppBar>
    </>
  )
}

export default NavBar
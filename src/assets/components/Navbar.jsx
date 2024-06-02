import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return(
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-around', padding: 3, background: '#8E7155'}}>
        <Typography variant="h3" sx={{color: 'white'}}>Big Brew</Typography>
        <Box sx={
            {
              display: 'flex', gap: 2, 
              alignItems: 'center', 
              padding: 1
            }}>

          <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to="/">Home</Link>
          <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to="/profile">Profile</Link>
          <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to="/logout">Logout</Link>
          <ShoppingCartIcon style={{fontSize: 40}} />
        </Box>
      </Box>
    </>
  )
}

export default Navbar
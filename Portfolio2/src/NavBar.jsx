import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { AiFillStar, AiOutlineHome } from 'react-icons/ai'




function NavBar (){
    return (
        <AppBar>
            <Toolbar>
                <Typography>
                    JH
                </Typography>
                    
                        
                            <Button variant="contained" sx={{marginLeft: "auto"}} color="secondary"> Yes
                            <AiFillStar /> {/* Render the filled star icon */}
                            <AiOutlineHome /> {/* Render the home icon outline */}
                            </Button>
                        
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
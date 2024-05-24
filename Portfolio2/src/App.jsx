import { useState } from "react";
import { BrowserRouter,Route,Routes,Link,Navigate,useLocation } from "react-router-dom";
import {
    // Container,
    // Grid,
    AppBar,
    Toolbar,
    CssBaseline,
    Box,
    // Drawer,
    // List,
    // ListItem,
    // ListItemIcon,
    // ListItemText,
    // Divider, 
    NavBar,  
} from "@mui/material";

// import {
//     Home as HomeIcon,
//     Info as AboutIcon,
//     Work as ProjectsIcon,
//     Description as ResumeIcon,
// } from "@mui/icons-material";

// ... your other component imports (About, Home2, etc.)
// import NavBar from './NavBar'; // Adjust path as needed
// ...rest of your App.js code

 <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
        <NavBar toggleDrawer={toggleDrawer} /> 
    </Toolbar>
 </AppBar>


function App() {
    // ... your other state variables (drawerOpen, location)

    // ... your toggleDrawer function

    // ... your drawerContent 

    return (
        <Router>
            <CssBaseline />
            <Box sx={{ display: "flex" }}>

                {/* Updated AppBar with the new NavBar */}
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <NavBar toggleDrawer={toggleDrawer}/> 
                    </Toolbar>
                </AppBar>

                {/* ... rest of your App components (Drawer, Box, Routes, etc.) */}
            </Box>
        </Router>
    );
}

export default App;

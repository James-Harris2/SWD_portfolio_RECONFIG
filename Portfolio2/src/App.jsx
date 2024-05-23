import  { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  CssBaseline,
  Box, // Added for spacing/layout
  Drawer, // Add for navigation drawer
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link, 
  Navigate,
  useLocation // Add for navigation highlighting
} from "react-router-dom";
import {
  Home as HomeIcon,
  Person as AboutIcon,
  Work as ProjectsIcon,
  // Description as ResumeIcon,
  Home,
} from "@mui/icons-material";


import NavBar from '../components/NavBar';
// import Home from '../components/Home';
// import About from '../components/About';
// import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Techstack from '../components/Techstack';
import GitHub from '../components/GitHub';
import Toolstack from '../components/ToolStack';
import ScrollToTop from '../components/ScrollToTheTop';
// import ResumeNew from "../components/ResumeNew";
//..rest of your component code


// import Preloader from "../src/components/Pre"; // Optional preloader

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Optional Preloader Logic (Remove comment if you want to use it)
  // const [load, updateLoad] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     updateLoad(false);
  //   }, 1200);
  //   return () => clearTimeout(timer);
  // }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: "Home", icon: <HomeIcon />, path: "/" },
    { label: "About", icon: <AboutIcon />, path: "/about" },
    // { label: "Projects", icon: <ProjectsIcon />, path: "/project" },
    // { label: "ResumeNew", icon: <ResumeIcon />, path: "/resume" },
  ];

  const drawerContent = (
    <List>
      {navItems.map((item) => (
        <ListItem button key={item.label} component={Link} to={item.path} onClick={toggleDrawer} selected={location.pathname === item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
  <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}> {/* Use Box for main layout */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              James E Harris II
            </Typography>
            <NavBar toggleDrawer={toggleDrawer}/>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          {drawerContent}
        </Drawer>

        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          <Toolbar /> {/* To offset content below the AppBar */}
          <ScrollToTop />
          <Routes>
            {navItems.map((item) => (
              <Route key={item.label} path={item.path} element={item.component || <div> {/* Render the correct component here */}</div>} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          {/* Additional Components */}
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Home/>
              <Techstack />
              <GitHub />
              <Toolstack />,
            </Grid>
          </Container>
          
          <Footer />
        </Box> 
      </Box>
  
            </>
  );
}

export default App;

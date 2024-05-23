import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  TextareaAutosize,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleContactFormOpen = () => {
    setContactFormOpen(true);
    handleMenuClose(); // Close menu after opening form
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Website
        </Typography>
        <Button color="inherit" onClick={handleContactFormOpen}>Contact</Button>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
        <MenuItem component="a" href="Resume.pdf" target="_blank" download>Resume</MenuItem>
      </Menu>
    
      {/* Contact Form (conditionally rendered) */}
      {contactFormOpen && (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Contact Us</Typography>
          <TextField label="First Name" fullWidth margin="normal" />
          <TextField label="Last Name" fullWidth margin="normal" />
          <TextField label="Email Address" fullWidth margin="normal" />
          <TextField label="Website (optional)" fullWidth margin="normal" />
          <TextareaAutosize
            aria-label="Message"
            minRows={5}
            placeholder="Your message here..."
            style={{ width: '100%', marginTop: 16 }}
          />
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </Box>
      )}
    </AppBar>
  );
}

export default NavBar;

import { useState } from 'react';
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
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({ toggleDrawer }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [contactFormOpen, setContactFormOpen] = useState(false);

    // ... (menu handling functions) ...

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={toggleDrawer}>
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

            {/* Contact Form Dialog */}
            <Dialog open={contactFormOpen} onClose={() => setContactFormOpen(false)}>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogContent>
                    <TextField label="Name" fullWidth margin="dense" /> 
                    <TextField label="Email Address" fullWidth margin="dense" type="email" /> 
                    <TextField label="Subject" fullWidth margin="dense" /> 
                    <TextareaAutosize
                        aria-label="Message"
                        minRows={5}
                        placeholder="Your message here..."
                        style={{ width: '100%' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setContactFormOpen(false)}>Cancel</Button>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </AppBar>
    );
}

export default NavBar;

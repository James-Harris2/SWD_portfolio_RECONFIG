import {
  Avatar,
  Box, // Use Box for flexible layout
  Typography,
  Chip,
  Grid, // To organize chips nicely
} from "@mui/material";

function About() {
  return (
    <Box sx={{ mt: 5, mb: 10, p: 3 }}> 
      <Avatar 
        alt="James" 
        src="https://github.com/James-Harris2/" // Replace with your profile image path
        sx={{ width: 100, height: 100, mb: 2 }} 
      />

      <Typography variant="h4" component="h1" gutterBottom align="center">
        About Me
      </Typography>

      <Typography variant="body1" paragraph align="center">
        {/* ... your about text ... */}
        I am a passionate web developer with expertise in React, JavaScript, and other technologies. I enjoy building creative and user-friendly applications.
      </Typography>

      <Typography variant="h6" gutterBottom align="center" mt={3}>
        Skills
      </Typography>

      <Grid container justifyContent="center" spacing={1}>
        {/* Use Grid for better spacing and responsiveness */}
        <Grid item>
          <Chip label="React" />
        </Grid>
        <Grid item>
          <Chip label="JavaScript" />
        </Grid>
        {/* Add more Chip components for other skills */}
      </Grid>
    </Box>
  );
}

export default About;

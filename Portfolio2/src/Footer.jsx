import { Container, Typography, Grid, Link } from "@mui/material";
import socialMediaLinks from "./Contants"

function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated socialMediaLinks in constants.js (assuming these are James Harris's profiles)
  // ... (your socialMediaLinks array here)

  return (
    <Container maxWidth="md" component="footer" sx={{ bgcolor: "primary.main", py: 4 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" color="white">
            Designed and Developed by James Harris
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="body2" color="white">
            Copyright © {currentYear} JH 
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} container justifyContent="flex-end">
          {socialMediaLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              underline="none"  
              sx={{ ml: 2 }}  
            >
              {link.icon} 
            </Link>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;

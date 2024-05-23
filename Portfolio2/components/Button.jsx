
import { Button, GitHubIcon, StarIcon } from '@mui/material';

// ... (inside your component)

<Button
  variant="contained" // Adds a filled background for better visibility
  color="primary"   // Makes it the primary color of your theme
  href="https://github.com/James-Harris2/"
  target="_blank"
  startIcon={<GitHubIcon />}
  endIcon={<StarIcon />}
>
  GitHub
</Button>

import { Grid, Box, Typography } from "@mui/material";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows // Import the Windows icon
} from "react-icons/si";

function Toolstack() {
  const icons = [
    { icon: SiWindows, label: "Windows OS" }, // Updated icon and label
    { icon: SiVisualstudiocode, label: "VS Code" },
    { icon: SiPostman, label: "Postman" },
    { icon: SiSlack, label: "Slack" },
    { icon: SiVercel, label: "Vercel" },
  ];

  return (
    <Box sx={{ paddingBottom: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        My Tool Stack
      </Typography>

      <Grid container justifyContent="center" spacing={2}>
        {icons.map(({ icon: Icon, label }) => (
          <Grid item key={label}>
            <Icon size={40} />
            <Typography variant="body1" mt={1}>
              {label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Toolstack;

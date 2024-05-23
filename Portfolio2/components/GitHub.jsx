import GitHubCalendar from "react-github-calendar";
import { Container, Typography, Grid } from "@mui/material";

function Github() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Days I <span style={{ color: "#c084f5" }}>Code</span>
      </Typography>

      <Grid container justifyContent="center">
        <GitHubCalendar 
          username="James-Harris2" 
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Grid>
    </Container>
  );
}

export default Github;

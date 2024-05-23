import { Container, Grid, Typography, Box, IconButton, } from "@mui/material";
import about from "../src/Assets/about.png"
import Tilt from "react-parallax-tilt"; 
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: AiFillGithub,
    url: "https://github.com/James-Harris2", // Update with your GitHub profile
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/james-harris-6b8a33110/", // Update with your LinkedIn profile
  },

];

function Home2() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="about">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
           ALLOW LET ME <span style={{ color: "purple" }}>INTRODUCE</span> MYSELF
          </Typography>
          <Typography variant="body1">
            I fell in love with programming, after being a commercial truck driver for 20+ years. I enjoy learning Technologies, and serving my community with my talents build something great… 🤷‍♂️
            <br />
            <br />
            I am fluent in classics like
            <i style={{ color: "purple" }}> C++, Javascript. </i>
            <br />
            <br />
            My field of Interests are building new &nbsp;
            <i style={{ color: "purple" }}>Web Technologies and Products </i> and
            also in areas related to{" "}
            <i style={{ color: "purple" }}>FinTech.</i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <i style={{ color: "purple" }}>Node.js</i> and
            <i style={{ color: "purple" }}>Modern Javascript Library and Frameworks</i>
            &nbsp; like
            <i style={{ color: "purple" }}> React.js and Next.js</i>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Tilt>
            <img src={about} alt="avatar" style={{ maxWidth: "100%" }} />
          </Tilt>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          FIND ME ON
        </Typography>
        <Typography variant="body1">
          Feel free to <span style={{ color: "purple" }}>connect</span> with me
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <IconButton key={index} href={url} target="_blank" rel="noopener noreferrer">
              <Icon fontSize="large" />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Home2;

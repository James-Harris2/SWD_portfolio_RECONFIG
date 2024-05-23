import { Container, Grid, Typography } from "@mui/material";
import Asset2 from "../src/Assets/asset2_me.jpg"
import Home2 from "./Home2";
import Type from "../src/ParticlesConfig.js"
import Particle from "./Particles.jsx"

function Home() {
  return (
    <section>
      <Container maxWidth="xl" id="home">
        <Particle />
        <Grid container spacing={2} alignItems="center"> {/* Align items vertically */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom>
              Hi There! 🐶  {/* Replaced hand gesture with Happy Dog emoji */}
            </Typography>

            <Typography variant="h2" component="h1">
              IM <strong className="main-name">JH</strong>
              <span className="sub-name"> (James Harris)</span>
            </Typography>

            <Type /> {/* No need for additional styling here */}
          </Grid>

          <Grid item xs={12} md={5}>
            <img 
              src={Asset2}
              alt="home pic"
              style={{ maxHeight: 450, width: "100%" }} 
            />
          </Grid>
        </Grid>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

import { Container, Grid, Typography,} from "@mui/material";
import Asset from "../src/Assets/asset2_me.jpg"
import Home2 from "./Home2";
import Type from "../src/Type.jsx";
import Particle from "../src/Particles.jsx";

function Home() {
  return (
    <section>
      <Container maxWidth="xl" id="home"> {/* Removed the py style */}
        <Particle />
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}> 
            <Typography variant="h4" gutterBottom>
              Hi There! <span role="img" aria-label="wave">👋🏻</span>
            </Typography>

            <Typography variant="h3" component="h1">
              I'M <strong className="main-name">JH</strong>
              <span className="sub-name"> (James Harris)</span>
            </Typography>

            <div style={{ padding: "50px 0", textAlign: "left" }}> {/* Adjusted padding */}
              <Type />
            </div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center" }}>
            <img 
              src={Asset}
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

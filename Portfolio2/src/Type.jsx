import Particles from 'react-particles'; // Import the react-particles component
import Typewriter from 'typewriter-effect';
import particlesConfig from '../src/ParticlesConfig'; // Import your particle configuration

function Type() {
  return (
    <div style={{ position: 'relative' }}> 
      <Particles params={particlesConfig} style={{ position: 'absolute' }} />
      <div style={{ position: 'relative', zIndex: 1 }}> 
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Freelancer",
              "MERN Stack Developer",
              "Open Source Contributor"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}

export default Type;

const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" }, // No stroke needed if width is 0
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 2, random: true }, // Other properties are default
    },
  };
  
  export default particlesConfig;
  
// import { Container, Typography, Grid } from "@mui/material";
// import ProjectCard from "./ProjectCards";
// import Particle from "./Particles"
// import chatify from "../src/Assets/chatbot.jpg";



// function Projects() {
//   const projects = [
//     {
//       title: "Chatify",
//       description:
//         "Personal Chat Room or Workspace to share resources and hangout with friends built with React.js, Material-UI, and Firebase. Features include real-time messaging, image sharing, and reactions.",
//       imgPath: chatify,
//       ghLink: "https://github.com/James-Harris2/",
//       demoLink: "https://fe-render-test.onrender.com/",
//     },
//     {
//       title: "Bits-0f-C0de",
//       description:
//         "My personal blog page built with Next.js and Tailwind CSS. It renders content from markdown files, supports dark mode, and makes blogging with markdown easy.",
//       imgPath: chatify,
//       ghLink: "https://github.com/James-Harris2/",
//       demoLink: "https://fe-render-test.onrender.com/",
//     },
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }} className="project-section">
//       <Particle />
//       <Typography
//         variant="h2"
//         component="h1"
//         gutterBottom
//         align="center"
//         className="project-heading"
//       >
//         My Recent <strong className="purple">Works</strong>
//       </Typography>
//       <Typography
//         variant="body1"
//         paragraph
//         align="center"
//         color="textSecondary"
//       >
//         Here are a few projects I've worked on recently.
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {projects.map((project) => (
//           <Grid item key={project.title} xs={12} sm={6} md={4}>
//             <ProjectCard project={project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Projects;

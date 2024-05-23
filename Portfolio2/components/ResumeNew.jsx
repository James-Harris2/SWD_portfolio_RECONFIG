// import React, { useState, useEffect } from "react";
// import { Container, Grid, Button, Box, Link } from "@mui/material";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import Particle from "../Particles"; 


// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   const downloadButton = (
//     <Grid item xs={12} sm={4} container justifyContent="center">
//       <Button
//         variant="contained"
//         component={Link}
//         href={pdfjs}
//         target="_blank"
//         startIcon={<AiOutlineDownload />}
//         sx={{ mt: 2 }}
//       >
//         Download CV
//       </Button>
//     </Grid>
//   );

//   return (
//     <Box className="resume-section" sx={{ py: 8 }}>
//       <Particle />
//       <Container maxWidth="md">
//         <Grid container spacing={3} justifyContent="center">
//           {downloadButton}  {/* Download button at the top */}
//           <Grid item xs={12} sm={8}>
//             <Document file={pdfjs}>
//               <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//             </Document>
//           </Grid>
//           {downloadButton}  {/* Download button at the bottom */} 
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default ResumeNew;

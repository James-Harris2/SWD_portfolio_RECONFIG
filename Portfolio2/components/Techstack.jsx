import { Box, Grid, Typography } from "@mui/material";  // Import MUI components
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techIcons = [ // Array of tech icons for easier iteration
    { icon: <CgCPlusPlus />, label: 'C++' },
    { icon: <DiJavascript1 />, label: 'JavaScript' },
    { icon: <TbBrandGolang />, label: 'Go' },
    { icon: <DiNodejs />, label: 'Node.js' },
    { icon: <DiReact />, label: 'React' },
    { icon: <SiSolidity />, label: 'Solidity' },
    { icon: <DiMongodb />, label: 'MongoDB' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <DiGit />, label: 'Git' },
    { icon: <SiFirebase />, label: 'Firebase' },
    { icon: <SiRedis />, label: 'Redis' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <DiPython />, label: 'Python' },
    { icon: <DiJava />, label: 'Java' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}> 
      <Grid container spacing={2}>  
        {techIcons.map(({ icon, label }, index) => (
          <Grid item xs={4} md={2} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {icon}
            <Typography variant="body2">{label}</Typography> 
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Techstack;

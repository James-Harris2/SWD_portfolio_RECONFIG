import projects from "./Projects";



import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language"; // For demo/website

function ProjectCard() {
  const { title, description, imgPath, ghLink, demoLink } = projects;

  const buttons = [
    {
      label: "GitHub",
      icon: <GitHubIcon />,
      link: ghLink,
    },
  ];

  if (demoLink) {
    buttons.push({
      label: "Demo",
      icon: <LanguageIcon />,
      link: demoLink,
    });
  }

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia component="img" height="140" image={imgPath} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack direction="row" spacing={2} mt={2}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={button.icon}
              onClick={() => handleButtonClick(button.link)}
            >
              {button.label}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';

export default function Projects() {
   console.log('projects:', projects);
  console.log('primeira imagem:', projects[0]?.image);
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          overline="03. projetos"
          title="Projetos Selecionados"
          subtitle="Projetos desenvolvidos para demonstrar minhas habilidades em análise de dados, dashboards e inteligência operacional."
        />

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card
                sx={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#9CA3AF',
                      mb: 3,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                      />
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={<OpenInNewIcon />}
                      href={project.demo}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
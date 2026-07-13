import { Box, Container, Divider, IconButton, Typography, Tooltip, alpha } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { profile } from '../../data/profile';

const SOCIAL = [
  { icon: <GitHubIcon />, label: 'GitHub', href: profile.github },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: profile.linkedin },
  { icon: <EmailOutlinedIcon />, label: 'E-mail', href: `mailto:${profile.email}` },
];
const NAV_LINKS = [
  { label: 'Sobre', id: 'about' },
  { label: 'Experiência', id: 'experience' },
  { label: 'Competências', id: 'skills' },
  { label: 'Contato', id: 'contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0d1117',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
            mb: 3,
          }}
        >
          {/* Brand */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, #915EFF 0%, #00D9F5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 0.5,
              }}
            >
              {profile.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontFamily: '"Fira Code", monospace',
              }}
            >
              {profile.title}
              Business Intelligence | Operações | Tecnologia
            </Typography>
          </Box>

          {/* Nav links */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.id}
                component="a"
                onClick={() => {
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
  width: 42,
  height: 42,
  border: '1px solid rgba(255,255,255,.08)',
  color: 'text.secondary',
  transition: 'all .3s ease',

  '&:hover': {
    color: 'primary.main',
    borderColor: 'primary.main',
    bgcolor: alpha('#915EFF', .10),
    transform: 'translateY(-3px)',
  },
}}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {SOCIAL.map((s) => (
              <Tooltip key={s.label} title={s.label} arrow>
                <IconButton
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label={s.label}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: alpha('#915EFF', 0.1),
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography
          variant="caption"
          sx={{ display: 'block', textAlign: 'center', color: 'text.secondary' }}
        >
          <Typography
  sx={{
    textAlign: 'center',
    color: 'text.secondary',
    mt: 2,
    fontSize: '.9rem',
    maxWidth: 600,
    mx: 'auto',
  }}
>
  Transformando dados em informações para apoiar decisões estratégicas.
</Typography>
          © {year} {profile.name}. Desenvolvido com React, Vite e Material UI.
        </Typography>
      </Container>
    </Box>
  );
}

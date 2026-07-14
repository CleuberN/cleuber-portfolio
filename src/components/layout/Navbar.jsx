import { useState, useEffect } from 'react';
import {
  AppBar, Box, Container, Drawer, IconButton, List, ListItem,
  ListItemButton, ListItemText, Toolbar, Typography, Button,
  useScrollTrigger, alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { profile } from '../../data/profile';

const NAV_LINKS = [
  { label: 'Sobre', id: 'about' },
  { label: 'Experiência', id: 'experience' },
  { label: 'Habilidades', id: 'skills' },
  { label: 'Contato', id: 'contact' },
];


function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: 'all 0.35s ease',
          backgroundColor: scrolled ? alpha('#050816', 0.85) : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5 }}>

            {/* Logo / name */}
            <Box
              onClick={() => scrollTo('home')}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 1.4,
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 6 },
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-1px)' },
              }}
            >
             <Box
  sx={{
    width: 44,
    height: 44,
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #915EFF 0%, #00D9F5 100%)',
    boxShadow: '0 10px 25px rgba(145,94,255,.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Fira Code", monospace',
    fontWeight: 700,
    fontSize: '0.9rem',
    color: '#fff',
    flexShrink: 0,
    transition: 'all .3s ease',

    '&:hover': {
      transform: 'rotate(-3deg) scale(1.05)',
    },
  }}
>

                {profile.initials}
              </Box>

<Box
  sx={{
    display: { xs: 'none', sm: 'block' },
  }}
>
  <Typography
    sx={{
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '0.95rem',
      lineHeight: 1.2,
    }}
  >
    Business Intelligence
  </Typography>

  <Typography
    sx={{
      color: 'text.secondary',
      fontSize: '0.78rem',
      fontFamily: '"Fira Code", monospace',
    }}
  >
    Operações • Dados
  </Typography>
</Box>
                 </Box>
          

            {/* Desktop nav links */}
            <Box
  sx={{
  display: { xs: 'none', md: 'flex' },
  fontFamily: '"Fira Code", monospace',
  fontSize: '0.78rem',
  ml: 2,
  px: 2.8,
  borderRadius: '999px',
  transition: 'all .3s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
  },
}}

>
  {NAV_LINKS.map((link) => (
    <Button
      key={link.id}
      onClick={() => handleNavClick(link.id)}
      sx={{
        color:
          activeSection === link.id
            ? '#FFFFFF'
            : 'text.secondary',

        bgcolor:
          activeSection === link.id
            ? alpha('#915EFF', 0.15)
            : 'transparent',

        border:
          activeSection === link.id
            ? '1px solid rgba(145,94,255,.35)'
            : '1px solid transparent',

        borderRadius: '999px',

        px: 2.2,
        py: 0.8,

        fontFamily: '"Fira Code", monospace',
        fontSize: '0.82rem',
        fontWeight: 500,

        transition: 'all .25s ease',

        '&:hover': {
          color: '#FFFFFF',
          bgcolor: alpha('#915EFF', .12),
          borderColor: alpha('#915EFF', .35),
        },
      }}
    >
      {link.label}
    </Button>
  ))}
</Box>

            {/* Download CV button */}
            <Button
              component="a"
              href={profile.resume}
              download
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.78rem',
                ml: 2,
              }}
            >
              Baixar CV
            </Button>

            {/* Mobile hamburger */}
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' } }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: '#0d1117',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            px: 2,
            py: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding>
  {NAV_LINKS.map((link) => (
    <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
      <ListItemButton
        onClick={() => handleNavClick(link.id)}
        sx={{
          borderRadius: '12px',

          color:
            activeSection === link.id
              ? '#FFFFFF'
              : 'text.secondary',

          bgcolor:
            activeSection === link.id
              ? alpha('#915EFF', .15)
              : 'transparent',

          border:
            activeSection === link.id
              ? '1px solid rgba(145,94,255,.35)'
              : '1px solid transparent',

          py: 1.2,

          transition: 'all .25s ease',

          '&:hover': {
            bgcolor: alpha('#915EFF', .10),
          },
        }}
      >
        <ListItemText
          primary={link.label}
          primaryTypographyProps={{
            fontWeight: 500,
            fontSize: '0.95rem',
          }}
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>

        <Box sx={{ mt: 4, px: 1 }}>
          <Button
            component="a"
            href={profile.resume}
            download
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Baixar CV
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
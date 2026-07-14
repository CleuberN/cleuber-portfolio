import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Tooltip,
  Typography,
  alpha,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { profile } from '../../data/profile';

/* ── Gradient orb helper ─────────────────────────────────── */
function Orb({ sx }) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(90px)',
        pointerEvents: 'none',
        ...sx,
      }}
    />
  );
}

/* ── Typewriter hook ─────────────────────────────────────── */
function useTypewriter(words, typingSpeed = 90, deletingSpeed = 50, pauseDuration = 2200) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[roleIndex];
    let delay;

    if (!isDeleting && text === fullText) {
      delay = pauseDuration;
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % words.length);
      return;
    }

    delay = isDeleting ? deletingSpeed : typingSpeed;
    const t = setTimeout(() => {
      setText(isDeleting ? fullText.slice(0, text.length - 1) : fullText.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, isDeleting, roleIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

/* ── Framer variants ─────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Hero component ──────────────────────────────────────── */
export default function Hero() {
  const typedRole = useTypewriter(profile.roles);

 const scrollToExperience = () => {
  document.getElementById('experience')?.scrollIntoView({
    behavior: 'smooth',
  });
};

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#050816',
        pt: { xs: 10, md: 0 },
      }}
    >
      {/* ── Background orbs ── */}
      <Orb
        sx={{
          width: { xs: 350, md: 600 },
          height: { xs: 350, md: 600 },
          background: 'radial-gradient(circle, rgba(145,94,255,0.35) 0%, transparent 70%)',
          top: '-80px',
          left: { xs: '-100px', md: '-150px' },
          animation: 'float1 22s ease-in-out infinite',
        }}
      />
      <Orb
        sx={{
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          background: 'radial-gradient(circle, rgba(0,217,245,0.25) 0%, transparent 70%)',
          bottom: { xs: '-50px', md: '0px' },
          right: { xs: '-80px', md: '-100px' },
          animation: 'float2 18s ease-in-out infinite',
        }}
      />
      <Orb
        sx={{
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          background: 'radial-gradient(circle, rgba(145,94,255,0.15) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float3 25s ease-in-out infinite',
        }}
      />

      {/* ── Dot grid overlay ── */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Main content ── */}
      <Container
  maxWidth="lg"
  sx={{
    position: 'relative',
    zIndex: 1,
    pt: { xs: 6, md: 9 },
  }}
>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Available badge */}
          {profile.available && (
            <motion.div variants={itemVariants}>
              <Chip
                icon={
                  <FiberManualRecordIcon
                    sx={{ fontSize: '10px !important', color: '#10B981 !important', animation: 'pulse-ring 2s infinite' }}
                  />
                }
                label={profile.availableLabel}
                size="small"
                sx={{
                  mb: 3,
                  bgcolor: alpha('#10B981', 0.12),
                  border: `1px solid ${alpha('#10B981', 0.35)}`,
                  color: '#10B981',
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.03em',
                  cursor: 'default',
                }}
              />
            </motion.div>
          )}

          {/* Name */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.3rem', md: '4.4rem', lg: '4.9rem' },
                mb: 1.5,
                lineHeight: 1.1,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'block',
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  fontWeight: 400,
                  fontFamily: '"Fira Code", monospace',
                  mb: 1,
                  letterSpacing: '0.05em',
                }}
              >
                Olá, eu sou
              </Box>
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #FFFFFF 30%, #94A3B8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {profile.name}
              </Box>
            </Typography>
          </motion.div>

          {/* Typed role */}
          <motion.div variants={itemVariants}>
            <Typography
  sx={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    px: 2,
    py: 1,
    mb: 3,
    borderRadius: '999px',
    background: 'rgba(145,94,255,.10)',
    border: '1px solid rgba(145,94,255,.25)',
    color: '#B98CFF',
    fontWeight: 600,
    fontSize: {
      xs: '.95rem',
      md: '1rem',
    },
    width: 'fit-content',
  }}
>
  Especialista em Operações • Indicadores • Business Intelligence
</Typography>
          </motion.div>
{/* Experiência */}
<motion.div variants={itemVariants}>
  <Typography
  sx={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    px: 2,
    py: 1,
    mb: 3,

    borderRadius: '999px',

    background: 'rgba(145,94,255,.10)',

    border: '1px solid rgba(145,94,255,.25)',

    color: '#B98CFF',

    fontWeight: 600,

    fontSize: {
      xs: '.95rem',
      md: '1rem',
    },

    width: 'fit-content',
  }}
>
  13+ anos em Telecomunicações
</Typography>

</motion.div>

{/* Descrição */}
<motion.div variants={itemVariants}>
  <Typography
  variant="body1"
  sx={{
    maxWidth: { xs: '100%', md: '560px' },
    color: 'text.secondary',
    mb: 5,
    fontSize: { xs: '1rem', md: '1.05rem' },
    lineHeight: 1.9,
  }}
>
  
    {profile.description}
  </Typography>
</motion.div>
          
          {/* Location & code flavor */}
        {/* Localização */}
<motion.div variants={itemVariants}>
  <Typography
    sx={{
      mt: 1,
      color: 'text.secondary',
      fontSize: '0.95rem',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    📍 São Paulo, SP • Brasil
  </Typography>
</motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <Box
          sx={{
  position: 'absolute',
  bottom: { xs: 10, md: 20 },
  right: 40,
  left: 'auto',
  transform: 'none',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0.5,

  opacity: 0.5,
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
  },
}}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontSize: '0.65rem', letterSpacing: '0.1em' }}>

            EXPLORE MAIS
          </Typography>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <KeyboardArrowDownIcon />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

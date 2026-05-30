import { ThemeProvider, CssBaseline, GlobalStyles, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const globalStyles = `
  html { scroll-behavior: smooth; }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />

      <Navbar />

      <Box>
        <Hero />
        <About />
        <Experience />
        <Skills />

        {/* 🔥 SEU PROJETO AQUI */}
        <section id="projects">
          <h2>Projetos</h2>

          <div>
            <img
              src="/projects/publicprojectsdashboard-sesi.png"
              alt="Dashboard SESI"
              style={{ width: '100%', maxWidth: '600px', borderRadius: '12px' }}
            />
            <h3>Dashboard SESI</h3>
            <p>Painel operacional de gestão de eventos</p>
          </div>
        </section>

        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
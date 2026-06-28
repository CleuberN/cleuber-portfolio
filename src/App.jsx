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
       

       <Projects />

        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
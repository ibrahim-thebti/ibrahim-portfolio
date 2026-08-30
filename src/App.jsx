import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Certs from './components/Certifications/certifications';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
function App() {
    return (
        <>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certs />
        <Contact />
        <Footer />
        <Analytics />
        </>
    )
}
export default App;
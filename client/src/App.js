import './App.css';
import Header from "./Header";
import IntroMe from './IntroMe';
import AboutMe from './About_me';
import Projects from  './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';
import SecComponent from './SecComponent';

function App() {
  const alt = "Project project"
  return (
    <div className="App">
      <Header />
      <IntroMe />
      <div id = "aboutP"></div>
      <SecComponent topic= { "About me" }/>
      <AboutMe />
      <div id = "projectP"></div>
      <SecComponent topic= { "Projects" }/>
      <Projects  alt = { alt }/>
      <div id = "contactP"></div>
      { /* to telegram chat bot */ }
      <SecComponent topic= { "Contact me" }/>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

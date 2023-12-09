import './App.css';
import './resources/fontawesome-free-6.4.2-web/css/all.min.css'
import './bootstrap/dist/css/bootstrap.min.css';
import IntroMe from './IntroMe';
import ContactMe from './Contact_me';
import Footer from './Footer';
import Navigation from './Header';
import CustomAccodion from './render_components/CustomAccodion';

function App() {

  const alt = "Project project"

  return (
    <div className="App bg-dark">
      <Navigation />
      <IntroMe />
      <CustomAccodion />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

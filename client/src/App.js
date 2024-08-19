import './App.css';
import './resources/fontawesome-free-6.4.2-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroMe from './IntroMe';
import ContactMe from './Contact_me';
import Footer from './Footer';
import Navigation from './Header';
import CustomAccodion from './components/CustomAccodion';
import Profile from './ProfilePage';
import { getProfiles } from './utils/profiles';

// import { Router, Routes, Route} from 'react-router-dom';
// import { fetchProfiles } from 'utils/profiles';

function App() {
  // const profiles = await getProfiles();

  return (
    /** <Router>
          <div className="App bg-dark">

            <Routes>
              { profiles ? profiles.map((profile) => (
                // how can i pass the profile into the Profile component
                <Route path={ profile.path } component={Profile} />
              )) : }
            </Routes>
          </div> 
        </Router> 
    **/
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

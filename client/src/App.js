import './App.css';
import './resources/fontawesome-free-6.4.2-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './ProfilePage';
import { getProfiles } from './utils/profiles';
import { Router, Routes, Route} from 'react-router-dom';

function App() {
  const profiles = getProfiles();
  console.log(profiles);
  
  return (
    <Router>
          <div className="App bg-dark">

            <Routes>
              { profiles ? profiles.map((profile) => (
                // how can i pass the profile into the Profile component
                <Route path={ profile.path } component={Profile} />
              )) : ( <Route path='/Profile' component={Profile} /> ) }
            </Routes>
          </div> 
        </Router> 
  
    // <div className="App bg-dark">
    //   <Navigation />
    //   <IntroMe />
    //   <CustomAccodion />
    //   <ContactMe />
    //   <Footer />
    // </div>
  );
}

export default App;

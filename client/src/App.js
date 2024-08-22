import './App.css';
import './resources/fontawesome-free-6.4.2-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './ProfilePage';
import { getProfiles } from './utils/profiles';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const profiles = [
    { path: '/full_stack_developer', json: {} },
    { path: '/backend_developer', json: {} },
    { path: '/frontend_developer', json: {} },
    { path: '/machine_learning_developer', json: {} },
];
  console.log(profiles);
  
  return (
    <BrowserRouter>
          <div className="App bg-dark">

            <Routes>
              {/* { profiles ? profiles.map((profile) => 
                // how can i pass the profile into the Profile component
                <Route path={ profile.path } component={ Profile } />
              ) : <Route path='/Profile' component={ Profile } /> } */}
              <Route path='/'> <Profile /> </Route>
            </Routes>
          </div> 
    </BrowserRouter> 
  
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

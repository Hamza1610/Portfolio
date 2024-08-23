import './App.css';
import './resources/fontawesome-free-6.4.2-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './ProfilePage';
import { getProfiles } from './utils/profiles';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFoundPage from './404';

function App() {
  const profiles = [
    { path: '/', json: {} },
    { path: '/full_stack_developer', json: {} },
    { path: '/backend_developer', json: {} },
    { path: '/machine_learning_developer', json: {} },
];
  console.log();
  
  return (
    <BrowserRouter>
          <div className="App bg-dark">

            <Routes>
              { profiles ? profiles.map((profile, key) => 
                // how can i pass the profile into the Profile component
                (<Route path={ profile.path } Component={ Profile } key={key} exact/>)
              ) : (<Route path='/' Component={ Profile } />) }

            <Route path='/NotFound' Component={ NotFoundPage } />
            </Routes>
          </div> 
    </BrowserRouter> 
  );
}

export default App;

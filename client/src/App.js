import './App.css';
import './resources/fontawesome-free-6.4.2-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './ProfilePage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NotFoundPage from './404';
import ProfileList from './ProfileList';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark">
        <Routes>
          <Route path='/' Component={ ProfileList }  />
          <Route path='/profile/:id' Component={ Profile }  />
          <Route path='*' Component={ NotFoundPage } />
        </Routes>
      </div> 
    </BrowserRouter> 
  );
}

export default App;

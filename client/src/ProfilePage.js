import Navigation from './Header';
import IntroMe from './pages/IntroMe';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Technologies from './pages/Technologies';
import ContactMe from './pages/Contact_me';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import localProfilesList from './localProfilesTable.json'

const Profile = () => {
  const { id: profileId } = useParams(); // Destructure to get 'id' from useParams
  const [profile, setProfile] = useState(null); // Initially null, assuming profile is an object
  const [profileIdState, setProfileIdState] = useState(null); // 
  const [error, setError] = useState(''); // Empty string as the default error state
  const [loading, setLoading] = useState(true); // Add loading state

  console.log('ProfileId from params:', profileId);
  
  function fetchLocalProfile(profileId) {

    let localProfile;

    for (let profile of localProfilesList) {
      console.log('Iterated: ', profile)
      console.log(profile._id, profileId)
      if (profile._id === profileId) {
        console.log('Found profile >', profile);
        localProfile = profile
        break
      };
    }

    if (!localProfile) return null;
    return localProfile
  }

  const fetchServerProfile = async (profileId) => {
    const response = await axios.get(`http://localhost:3020/api/get-profile/${profileId}`);

    if (response.status === 200) {

      const  data = response.data;
      return data; 
    } else {
      return null;
    } 
  }

  useEffect(() => {
    const getProfileFromSource = async () => {
      try {
        if (profileId.length <= 5) {
          console.log('-----------------Local----------------------')
          setProfileIdState(profileId);
          console.log('ProfileId check: ', profileId);
          const profileData = await fetchLocalProfile(Number(profileId))
          setProfile(profileData)
        }
        else {
          console.log('-----------------Server----------------------')
          setProfileIdState(profileId)
          console.log('ProfileId check: ', profileIdState);
          const profileData = await fetchServerProfile(profileId)
          setProfile(profileData)
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to fetch profile data');
      } finally {
        setLoading(false);
      }
    }
    getProfileFromSource()
  }, [profileId]); // The effect depends on profileId

  // Display loading or error if necessary
  if (loading) return <div syle={{height: '100vh'}}>Loading...</div>;
  if (error) return <div syle={{height: '100vh'}}>Error: {error}</div>;

  console.log('Profile before destructure', profile);
  
  const { PersonalInfo, Experience, Contact, Summary, Framework, Project } = profile;

  return (
    <div id="app" className="App bg-dark">
      
      {/* Optionally render navigation and other components */}
      <Navigation />
      <IntroMe  Summary={Summary} PersonalInfo={PersonalInfo} />
      <Projects projectsList={Project} />
      <Experiences experience={Experience} />
      <Technologies technologies={Framework} />
      <ContactMe contactDetails={Contact} />
      <Footer />
     </div>
  );
};

export default Profile;

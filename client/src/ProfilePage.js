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

const Profile = () => {
  const { id: profileId } = useParams(); // Destructure to get 'id' from useParams
  console.log('userParams > profileId', profileId);
  const [profile, setProfile] = useState(null); // Initially null, assuming profile is an object
  const [error, setError] = useState(''); // Empty string as the default error state
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        console.log('Received id:', profileId);
        const response = await axios.get(`http://localhost:3002/api/get-profile/${profileId}`);

        if (response.status === 200) {
          setProfile(response.data); // Set the profile data on success
          console.log(profile); // Set the profile data on success
        } else {
          setError('No Profile data found');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to fetch profile data'); // Set user-friendly error message
      } finally {
        setLoading(false); // Stop loading after the fetch attempt
      }
    };

    fetchProfileData(); // Fetch the profile data when the component mounts
  }, [profileId]); // The effect depends on profileId

  // Display loading or error if necessary
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { PersonalInfo, Education, Experience, Contact, Skill, Summary, Framework, Project } = profile;

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

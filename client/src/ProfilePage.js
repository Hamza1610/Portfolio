import Navigation from './Header';
import IntroMe from './IntroMe';
import Projects  from './Projects';
import Experience from './Experience';
import Technologies from './Technologies';
import ContactMe from './Contact_me';
import Footer from './Footer';


const Profile = ({ profile }) => {

    return (

        <div className="App bg-dark">
            { profile }
            <Navigation />
            <IntroMe />
            <Projects />
            <Experience />
            <Technologies />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default Profile;
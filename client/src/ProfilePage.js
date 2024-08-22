

const Profile = ({ profile }) => {

    return (

        <div className="App bg-dark">
            { profile }
            <Navigation />
            <IntroMe />
            <CustomAccodion />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default Profile;
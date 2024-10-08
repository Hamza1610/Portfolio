import { useState, useEffect } from 'react'
import axios from 'axios'
import ProfileCard from './components/ProfileCard'

const  ProfileList = () => {

    const [profiles, setProfiles] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProfileTitles = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/get-all-profiles');
    
                console.log('Profiles', response);
                
                if (response.status === 200) {
                    setProfiles(response.data.profiles)
                    console.log('Profile list:', profiles);
                } else {
                    setError('Error fetcing profile')
                }
            } catch (error) {
                console.log(error)
                setError('Error fetcing profile')
            }
        }

        setTimeout(2000)
        fetchProfileTitles();
    }, [])

    return (
        <div
            style={{width: '100vw',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                height: '100vh'
                }}>
            <div>{error && (<p>error</p>)}</div>
            <div style={{width: '80%',
                display: 'flex',
                justifyContent:'space-evenly',
                alignItems: 'center',
                flexWrap:'wrap', gap: '20px'}}>
                {profiles.length < 1 && (
                    <div>
                        <h3>No Available Profile</h3>
                        <p style={{ textAlign: 'center' }}>Please refresh your browser</p>
                    </div>
                )}
                {profiles && profiles.map((profile, index) => (<ProfileCard key={index} {...profile }/>))}
            </div>
        </div>
      );
}

export default  ProfileList;
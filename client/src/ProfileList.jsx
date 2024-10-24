import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import axios from 'axios'
import ProfileCard from './components/ProfileCard'

const  ProfileList = () => {

    const [profiles, setProfiles] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProfileTitles = async () => {
            try {
                const response = await axios.get('http://localhost:3020/api/get-all-profiles');
    
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
            <div style={{width: '80%',
                display: 'flex',
                justifyContent:'space-evenly',
                alignItems: 'center',
                flexWrap:'wrap', gap: '20px'}}>
                {profiles.length < 1 && (
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0.2, x: 70 }}
                        transition={{ duration: .75, delay: .5 }}
                    >
                        <h3>No Available Profile</h3>
                        <p style={{ textAlign: 'center' }}>Please refresh your browser</p>
                    </motion.div>
                )}
                {profiles && profiles.map((profile, index) => (<ProfileCard key={index} {...profile }/>))}
            </div>
        </div>
      );
}

export default  ProfileList;
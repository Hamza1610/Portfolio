import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import axios from 'axios'
import ProfileCard from './components/ProfileCard'
import localProfilesList from './localProfilesTitleTable.json'


const  ProfileList = () => {

    const [serverProfiles, setServerProfiles] = useState([])
    const [localProfiles, setLocatProfiles] = useState(localProfilesList)
    const [error, setError] = useState('')

    useEffect(() => {
        console.log('Local Porfiles:', localProfiles);
        
        const fetchProfileTitles = async () => {
            try {
                const response = await axios.get('http://localhost:3020/api/get-all-profiles');
    
                console.log('Profiles', response);
                
                if (response.status === 200) {
                    setServerProfiles(response.data.profiles)
                    console.log('Profile list:', serverProfiles);
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
            style={{
                
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
            {error && ('ERROR: ' + error)}
            {serverProfiles ? (
                <div
                    style={{
                        width: '80%',
                        marginBottom:'20px'
                    }}
                >
                    <h3>Server Profiles</h3>
                    <hr style={{ width: '50%',  height:'1em' }}/>
                    <div style={{display: 'flex', gap: '20px',flexWrap: 'wrap', width: '100%'}}>
                        {serverProfiles.map((profile, index) => (<ProfileCard key={index} {...profile }/>))}
                    </div>
                    
                </div>
            ) : (
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0.2, x: 70 }}
                    transition={{ duration: .75, delay: .5 }}
                >
                    <h3>No Available Profile</h3>
                    <p style={{ textAlign: 'center' }}>No Server Profile Available</p>
                </motion.div>
            )}

            {localProfiles ? (
                <div style={{
                    width: '80%',
                    marginBottom:'20px'
                }}
                >
                    <h3>Local Profiles</h3>
                    <hr style={{ width: '50%',  height:'1em' }}/>
                    <div style={{display: 'flex',  gap: '20px', flexWrap: 'wrap', width: '100%'}}>
                        {localProfiles.map((profile, index) => (<ProfileCard key={index} {...profile } />))}
                    </div>
                    
                </div>
            ) : (
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0.2, x: 70 }}
                    transition={{ duration: .75, delay: .5 }}
                >
                    <h3>No Available Profile</h3>
                    <p style={{ textAlign: 'center' }}>No Local Profile Available</p>
                </motion.div>
            )}
        </div>
      );
}

export default  ProfileList;
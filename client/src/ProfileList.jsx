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
                width: '100vw',
                display: 'block',
            }}>
            {error && ('ERROR: ' + error)}
            <div>
                {serverProfiles ? (
                    <div
                        style={{width: '70%',
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            justifyContent:'space-evenly',
                            alignItems: 'center',
                            gap: '20px'}}
                    >
                        <h3>Server Profiles</h3>
                        <hr style={{ width: '50%',  height:'1em' }}/>
                        {serverProfiles.map((profile, index) => (<ProfileCard key={index} {...profile }/>))}
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

            </div>

            <div>
                {localProfiles ? (
                    <div style={{
                        width: '70%',
                        alignItems: 'center',
                        gap: '20px'
                        }}
                    >
                        <h3>Local Profiles</h3>
                        <hr style={{ width: '50%',  height:'1em' }}/>
                        {localProfiles.map((profile, index) => (<ProfileCard key={index} {...profile } />))}
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
        </div>
      );
}

export default  ProfileList;
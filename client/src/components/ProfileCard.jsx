import {Card, Image } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';



const ProfileCard = ({ ...profile }) => {

    const baseUrl = window.location.href;
    console.log(profile, baseUrl)
    return (
        <Card style={{ width: '12rem', height: '20rem', fontSize: '.5rem'}} className='custon-card m-0 bg-secondary fs-5' border='primary'>
            <Card.Body>
                <Image alt='Profile' src='my profile picture.jpg' style={{width: '100%'}}/>
                <Card.Title style={{color:'white'}}><b>{ profile.Title }</b></Card.Title>
                <div style={{ width: '100%', height:'30px', display: 'flex', gap: '5px'}}>
                    <Link onClick={() => navigator.clipboard.writeText( baseUrl + 'profile/' + profile._id)}  class='btn btn-primary d-flex justify-content-center align-items-center' style={{ width: '50%',  height: 'auto', fontSize: '.7rem', color: 'white' }} >Copy</Link>
                    <Link class='btn btn-primary d-flex justify-content-center align-items-center' to={'/profile/' + profile._id}  style={{ width: '50%', height: 'auto', fontSize: '.7rem', color: 'white'}} >Open </Link>
                </div>
            </Card.Body>
        </Card>
  );
}

export default ProfileCard;
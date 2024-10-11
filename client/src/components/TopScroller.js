
const TopScroller = () => {

    return ( 
        <a href="#app" style={{display: 'absolute'}}>
            <div className="bg-primary" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                width: '50px',
                zIndex: 24,
                height: '50px',
                position: 'fixed',
                bottom: '100px',
                left: '80vw',
                textAlign: 'center',
                color: 'white',
            }}>
                <i className="fas fa-up-long"></i>            
            </div>
        </a>
    );
}
 
export default TopScroller;
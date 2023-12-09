
const TopScroller = () => {

    return ( 
        <a href="#top">
            <div style={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                position: 'fixed',
                bottom: '100px',
                backgroundColor: 'blue',
                textAlign: 'center',
                color: 'white'
            }}>
            <i className="fas fa-up-long"></i>            
        </div>
        </a>
    );
}
 
export default TopScroller;
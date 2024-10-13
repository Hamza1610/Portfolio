import '../App.css';

const TopScroller = () => {

    return ( 
        <a href="#app" style={{display: 'absolute'}}>
            <div className="bg-primary top-scroller">
                <i className="fas fa-up-long  arrow"></i>            
            </div>
        </a>
    );
}
 
export default TopScroller;
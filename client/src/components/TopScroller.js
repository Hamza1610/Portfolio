import '../App.css';

const TopScroller = () => {

    const moveToTop = (event) => {
        setTimeout(() =>{
            event.preventDefault();
        }, 1500)
      }

    return ( 
        <a href="#app" onClick={(event) => moveToTop(event)} style={{display: 'absolute'}}>
            <div className="bg-primary top-scroller">
                <i className="fas fa-up-long  arrow"></i>            
            </div>
        </a>
    );
}
 
export default TopScroller;
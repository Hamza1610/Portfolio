import { Link } from "react-router-dom";



const NotFoundPage = () => {
    return (
        <div className="not-found-page" style={{width: '100vw',  height: '100vh',
            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <h1 style={{fontSize: '3.5em'}}>404</h1>
                <p>Page not found</p>
                <Link  href='/'>Go back home</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
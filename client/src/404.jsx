import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const NotFoundPage = () => {

    
    return (
        <div className="not-found-page" style={{width: '100vw',  height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0.2, x: 90 }}
                transition={{ duration: .75, delay: .5 }}
            >
                <h1 style={{fontSize: '3.5em'}}>404</h1>
                <p>Page not found</p>
                <Link  href='/'>Go back home</Link>
            </motion.div>
        </div>
    );
}


export default NotFoundPage;
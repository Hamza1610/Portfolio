import './ContactMe.css'
import link_facebook from './resources/contact_facebook.webp';
const ContactMe = () => {
    return ( 
        <div className="contact_div" id="contact_div">
            <div className="form_div">
                <form action= "" method="POST">
                    <div className="">
                        <input type="text" className="client_info" placeholder="My Client name here"></input>
                    </div>
                    <div className="">
                        <input type="email" className="client_info" placeholder="My Client email here"></input>
                    </div>
                    <div className="text_area_div">
                        <textarea className="textarea" placeholder="Message us here"></textarea>
                    </div>
                    <div className="btn_div">
                        <button className="submit_textarea">Send</button>
                    </div>
                </form>
            </div>
            <div className="social_div">
                <div className="social_div_label">
                    <div className="label">Social page</div>
                </div>
                <div className="social_links_div">
                    <div><a href= ""><img alt="LinkedIn logo" src={ link_facebook }/></a></div>
                    <div><a href=""><img alt="GitHub logo"src={ link_facebook } /></a></div>
                    <div><a href=""><img alt="Instagram logo" src={ link_facebook } /></a></div>
                    <div><a href=""><img alt="Facebook logo" src={ link_facebook } /></a></div>
                    <div><a href=""><img alt="Gmail logo" src={ link_facebook } /></a></div>
                </div>     
            </div>
        </div>
    );
}
 
export default ContactMe;
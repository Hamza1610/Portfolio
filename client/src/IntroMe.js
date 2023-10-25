import './IntroMe.css'
import my_picture from './resources/me.jpg';
const IntroMe = () => {
    return ( 
        <div className="brief_self">
            <div className="self_info">
                <div className="who_question">Hamza Muhammad</div>
                <div className="brief_me">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae iste enim sapiente voluptates rerum quae maxime id iusto reiciendis odio similique eaque, culpa sequi. Id commodi est, similique suscipit pariatur dicta perspiciatis. Autem reprehenderit id ex, sed animi nihil sit quasi quis consequuntur cupiditate aliquam libero, excepturi, assumenda accusamus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae iste enim sapiente voluptates rerum quae maxime id iusto reiciendis odio similique eaque, culpa sequi. Id commodi est, similique suscipit pariatur dicta perspiciatis. Autem reprehenderit id ex, sed animi nihil sit quasi quis consequuntur cupiditate aliquam libero, excepturi, assumenda accusamus!</p>
                </div>
            </div>
            <div className="self_pic_div">
                <img className="pic" src={ my_picture } alt="Me" />
            </div>
        </div>
    );
}
 
export default IntroMe;
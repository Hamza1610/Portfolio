import './SecComponent.css';
const SecComponent = (props) => {
    const topic = props.topic;
    return ( 
        <div className="topic_div">
            <div className="topic_text">{ topic }</div>
        </div>
    );
}
 
export default SecComponent;
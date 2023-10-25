import './Projects.css';
import fotoproject from'./resources/contact_facebook.webp';
const Projects = (props) => {
    /* Is a list with object items holding data as database */
    const projectData1 = [
        {id : 1, projectTitle: 'Hospital Management System', dateCreated: '01/01/1990', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
        {id : 2, projectTitle: 'Real Estate Management System', dateCreated: '02/02/1991', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
    ];

    const projectData2 = [
        {id : 3, projectTitle: 'School Management System', dateCreated: '03/03/1992', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
        {id : 4, projectTitle: 'Computer Management Stystem', dateCreated: '04/04/1993', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
    ];
    const projectData3 = [
        {id : 5, projectTitle: 'Database Management System', dateCreated: '05/05/1994', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
        {id : 6, projectTitle: 'Control Room Project', dateCreated: '06/06/1995', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
    ];

    const projectData4 = [
        {id : 7, projectTitle: 'Mobile money reciept', dateCreated: '07/07/1996', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'},
        {id : 8, projectTitle: 'Attendance marker', dateCreated: '08/08/1997', projectInfo: 'Lorem ifuhfud dufhijkn ufzu fdknjcfxui hdfvcxnvjk  uahugdsiufds uifdsu fdhzzjz dsfhydf ivdfu ufidf diuuidsghds ds ujdf dsui...'}
    ];
    const alt = props.alt;
    return (
        <div className="project_div" id="project_div">
            <div className = "set">
            {projectData1.map((proj) =>(
                <div className="proj_template">
                    <div>
                        <img className="project_img" src={ fotoproject }  alt= { alt } />
                    </div>
                    <h1 className="topic_head">{ proj.projectTitle }</h1>
                    <p className="topic_info">{ proj.projectInfo }</p>
                    <small className="topic_date">{ proj.dateCreated }</small>
                </div>
            ))}
            </div>
            <div className = "set">
            {projectData2.map((proj) =>(
                <div className="proj_template">
                    <div>
                        <img className="project_img" src={ fotoproject }  alt= { alt } />
                    </div>
                    <h1 className="topic_head">{ proj.projectTitle }</h1>
                    <p className="topic_info">{ proj.projectInfo }</p>
                    <small className="topic_date">{ proj.dateCreated }</small>
                </div>
            ))}
            </div>
            <div className = "set">
            {projectData3.map((proj) =>(
                <div className="proj_template">
                    <div>
                        <img className="project_img" src={ fotoproject }  alt= { alt } />
                    </div>
                    <h1 className="topic_head">{ proj.projectTitle }</h1>
                    <p className="topic_info">{ proj.projectInfo }</p>
                    <small className="topic_date">{ proj.dateCreated }</small>
                </div>
            ))}
            </div>
            <div className = "set">
            {projectData4.map((proj) =>(
                <div className="proj_template">
                    <div>
                        <img className="project_img" src={ fotoproject }  alt= { alt } />
                    </div>
                    <h1 className="topic_head">{ proj.projectTitle }</h1>
                    <p className="topic_info">{ proj.projectInfo }</p>
                    <small className="topic_date">{ proj.dateCreated }</small>
                </div>
            ))}
            </div>
        </div>
    );
}
 
export default Projects;
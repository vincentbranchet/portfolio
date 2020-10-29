import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const title = this.props.title;
    const desc = this.props.desc;
    
        return(
            <div className="projectWrapper">
                <div className="projectTitle">
                    {title}
                </div>
                <div className="projectBanner">

                </div>
                <div className="projectContent">
                    <div className="projectDesc">
                        {desc}
                    </div>
                    <div className="projectFeats">

                    </div>
                </div>
                <div className="projectLinks">

                </div>
                <div className="projectButton"></div>
            </div>
        );
    }
}

export default Project;
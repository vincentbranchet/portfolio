import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const title = this.props.title;
    const desc = this.props.desc;
    const isSelected = this.props.isSelected;
    const category = this.props.activeWith === "primary" ? this.props.primaryCategory : this.props.secondaryCategory;
    
        return(
            <div className={`projectWrapper ${isSelected ? "selected" : "unselected"}`}>
                <div className={`projectTitle category_${category}`}>
                    {title}
                </div>
                <div className="projectBanner">

                </div>
                <div className={`projectContent ${isSelected ? "selected" : "unselected"}`}>
                    <div className="projectDesc">
                        {desc}
                    </div>
                    <div className="projectFeats">

                    </div>
                </div>
                <div className={`projectLinks ${isSelected ? "selected" : "unselected"}`}>

                </div>
                <div className="projectButton" onClick={() => this.props.onClick(this.props.id)}></div>
            </div>
        );
    }
}

export default Project;
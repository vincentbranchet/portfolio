import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const title = this.props.title;
    const desc = this.props.desc;
    const imgName = this.props.img;
    const isSelected = this.props.isSelected;
    const isSmall = this.props.isSmall;
    const category = this.props.activeWith === "primary" ? this.props.primaryCategory : this.props.secondaryCategory;
    
        return(
            <div className={`projectWrapper ${isSelected ? "selected" : "unselected"} ${isSmall ? "smallSize" : "normalSize"}`}>
                <div className={`projectTitle category_${category}`}>
                    {title}
                </div>
                <div className="projectBanner">
                    <img className="bannerImage" src={`${process.env.PUBLIC_URL}/assets/img/${imgName}`}/>
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
                <div className={`projectButton category_${category}`} onClick={() => this.props.onClick(this.props.id)}>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/${isSelected ? "minus.png" : "plus.png"}`} />
                </div>
            </div>
        );
    }
}

export default Project;
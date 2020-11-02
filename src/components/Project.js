import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    renderFeats(array) {
        let feats = [];

        if(Array.isArray(array)) {
            array.forEach((feat) => feats.push(
                <li className="projectFeat">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/check-mark.png`} />
                    <span className="listTextWrapper">{feat}</span>
                </li>));
        }
        return feats;
    }

    renderLinks(array, cat) {
        let links = [];

        if(Array.isArray(array)) {
            array.forEach((link) => links.push(
                <a className={`projectLink category_${cat}`} href={`${link.url}`} target="_blank">{link.text}</a>
            ));
        }

        return links;
    }

    render() {
    const title = this.props.title;
    const desc = this.props.desc;
    const imgName = this.props.img;
    const isSelected = this.props.isSelected;
    const isSmall = this.props.isSmall;
    const category = this.props.activeWith === "primary" ? this.props.primaryCategory : this.props.secondaryCategory;
    const feats = this.renderFeats(this.props.feats);
    const links = this.renderLinks(this.props.links, category);
    
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
                    <ul className={`projectFeats category_${category}`}>
                        {feats}
                    </ul>
                </div>
                <div className={`projectLinks ${isSelected ? "selected" : "unselected"}`}>
                    {links}
                </div>
                <div className={`projectButton button category_${category}`} onClick={() => this.props.onClick(this.props.id)}>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/${isSelected ? "minus.png" : "plus.png"}`} />
                </div>
            </div>
        );
    }
}

export default Project;
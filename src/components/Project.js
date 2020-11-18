import React from 'react';
import Paragraph from './Paragraph';
import ExternalLink from './ExternalLink';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
                <ExternalLink 
                 className={`projectLink category_${cat}`}
                 href={`${link.url}`} 
                 target="_blank"
                 text={link.text}
                />
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
    const isLogo = this.props.isLogo;
    const category = this.props.activeWith === "primary" ? this.props.primaryCategory : this.props.secondaryCategory;
    const feats = this.renderFeats(this.props.feats);
    const links = this.renderLinks(this.props.links, category);
    
        return(
            <CSSTransition
                in={this.props.isShown}
                timeout={250}
                classNames="project-transition"
                key={this.props.id}
            >
                <CSSTransition
                    in={this.props.hasSwitched}
                    timeout={400}
                    classNames={"project-secondary-transition"}
                    key={this.props.id + 100}
                >
                    <div id={this.props.id} className={`projectWrapper category_${category} ${isSelected ? "selected" : "unselected"} ${isSmall ? "smallSize" : "normalSize"}`}>
                        <div className={`projectTitle category_${category}`}>
                            {title}
                        </div>
                        <div className="projectBanner">
                            <div className="bannerOverlay"></div>
                            <img className={`bannerImage  ${isLogo ? "logo" : ""}`} src={`${process.env.PUBLIC_URL}/assets/img/${imgName}`}/>
                        </div>
                        <div className={`projectContent ${isSelected ? "selected" : "unselected"}`}>
                            <div className="projectDesc">
                                <Paragraph text={desc} />
                            </div>
                            <ul className={`projectFeats category_${category}`}>
                                {feats}
                            </ul>
                        </div>
                        <div className={`projectLinks ${isSelected ? "selected" : "unselected"}`}>
                            {links}
                        </div>
                        <div className={`projectButton button category_${category}`} onClick={() => this.props.onClick(this.props.id)}>
                            <a className="projectAnchor" href={`#${this.props.id}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/${isSelected ? "minus.png" : "plus.png"}`} />
                            </a>
                        </div>
                    </div>
                </CSSTransition>
            </CSSTransition>
        );
    }
}

export default Project;
import React from 'react';
import Paragraph from './Paragraph';
import ExternalLink from './ExternalLink';

class LandingPage extends React.Component {
    render() {
      return (
        <div className={`landingPageWrapper ${this.props.direction}`}>
          <div className="landingPresentationWrapper">
            <div className="webPresWrapper">
              <img className="webPresLogo" src={`${process.env.PUBLIC_URL}/assets/img/coding.png`} alt="" />
              <div>Développement web front-end</div>
            </div>
            <div className="gamesPresWrapper">
              <img className="gamesPresLogo" src={`${process.env.PUBLIC_URL}/assets/img/gamepad.png`} alt="" />
              <div>Narrative & game design</div>
            </div>
            <div className="litPresWrapper">
              <img className="litPresLogo" src={`${process.env.PUBLIC_URL}/assets/img/quill.png`} alt="" />
              <div>Écriture créative</div>
            </div>
            <div className="availablePresWrapper">
              <img className="availablePresLogo" src={`${process.env.PUBLIC_URL}/assets/img/ok-mark.png`} alt="" />
              <div>Disponible !</div>
            </div>
          </div>
          
          <div className="profilePicWrapper">
            <img src={`${process.env.PUBLIC_URL}/assets/img/profile.png`} />
          </div>
          <div className="landingLinksWrapper">
            <ExternalLink 
              className={"landingLink"}
              href={this.props.links.linkedIn}
              target={"_blank"}
              text={<img src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`} />}
            />
            <ExternalLink 
              className={"landingLink"}
              href={this.props.links.github}
              target={"_blank"}
              text={<img src={`${process.env.PUBLIC_URL}/assets/img/github.png`} />}
            />
          </div>
        </div>
      );
    }
}

export default LandingPage;
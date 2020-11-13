import React from 'react';
import Paragraph from './Paragraph';
import ExternalLink from './ExternalLink';

class LandingPage extends React.Component {
    render() {
      return (
        <div className="landingPageWrapper">
          <div className="landingPresentationWrapper">
            <Paragraph
              text={this.props.text}
            />
            <div className="profilePicWrapper">
              <img src={`${process.env.PUBLIC_URL}/assets/img/profile.png`} />
            </div>
          </div>
          <div className="landingLinksWrapper">
            <ExternalLink 
              className={"landingLink"}
              href={this.props.links.linkedIn}
              target={"_blank"}
              text={<img src={`${process.env.PUBLIC_URL}/assets/img/linkedIn.png`} />}
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
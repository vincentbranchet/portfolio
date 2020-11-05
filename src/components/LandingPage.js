import React from 'react';
import Paragraph from './Paragraph';
import Link from './Link';

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
            <Link 
              className={"landingLink"}
              href={""}
              target={"_blank"}
              text={"LinkedIn"}
            />
            <Link 
              className={"landingLink"}
              href={""}
              target={"_blank"}
              text={"Github"}
            />
          </div>
        </div>
      );
    }
}

export default LandingPage;
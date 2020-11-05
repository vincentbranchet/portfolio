import React from 'react';

class LandingPage extends React.Component {
    render() {
      return (
        <div className="landingPageWrapper">
          <div className="landingPresentationWrapper">
            <Paragraph />
            <div className="profilePicWrapper">
              <img src={`${process.env.PUBLIC_URL}/assets/img/profile.png`} />
            </div>
          </div>
          <div className="landingLinksWrapper">
            <Link />
            <Link />
          </div>
        </div>
      );
    }
}

export default LandingPage;
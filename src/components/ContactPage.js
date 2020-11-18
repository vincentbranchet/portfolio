import React from 'react';
import Paragraph from './Paragraph';
import ExternalLink from './ExternalLink';

class ContactPage extends React.Component {
    render() {
      return (
        <div className={`contactPageWrapper ${this.props.direction}`}>
          <div className="contactTextWrapper">
            <Paragraph text={this.props.text} />
          </div>
          <div className="contactLinksWrapper">
            <div className="webLinks">
              <ExternalLink 
                className={"contactLink"}
                href={this.props.links.linkedIn}
                target={"_blank"}
                text={<img src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`} />}
              />
              <ExternalLink 
                className={"contactLink"}
                href={this.props.links.github}
                target={"_blank"}
                text={<img src={`${process.env.PUBLIC_URL}/assets/img/github.png`} />}
              />
            </div>
            <div className="otherLinks">
              <div className="otherLink">
                <img src={`${process.env.PUBLIC_URL}/assets/img/mail.png`} />
                <Paragraph text={"vince.branchet@gmail.com"} />
              </div>
              <div className="otherLink">
                <img src={`${process.env.PUBLIC_URL}/assets/img/phone.png`} />
                <Paragraph text={"+33(0)6 14 61 20 24"} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default ContactPage;
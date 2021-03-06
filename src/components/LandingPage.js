import React from 'react';
import ExternalLink from './ExternalLink';

class LandingPage extends React.Component {
    render() {
      return (
        <div className={`landingPageWrapper ${this.props.direction}`}>
          <div className="landingPresentationWrapper">
            <div className="webPresWrapper">
              <img className="webPresLogo" src={`${process.env.PUBLIC_URL}/assets/img/coding.png`} alt="Logo d'un écran d'ordinateur représentant l'activité de programmer." />
              <div>Développement web front-end</div>
            </div>
            <div className="gamesPresWrapper">
              <img className="gamesPresLogo" src={`${process.env.PUBLIC_URL}/assets/img/gamepad.png`} alt="Logo d'une manette de jeu vidéo représentant la création de jeux." />
              <div>Narrative design</div>
            </div>
            <div className="litPresWrapper">
              <img className="litPresLogo" src={`${process.env.PUBLIC_URL}/assets/img/quill.png`} alt="Logo d'une plume représentant l'activité d'écrire." />
              <div>Écriture créative</div>
            </div>
            <div className="availablePresWrapper">
              <img className="availablePresLogo" src={`${process.env.PUBLIC_URL}/assets/img/ok-mark.png`} alt="Symbole représant une case cochée." />
              <div>Disponible !</div>
            </div>
          </div>
          
          <div className="profilePicWrapper">
            <img src={`${process.env.PUBLIC_URL}/assets/img/profile.png`} alt="Photo portrait de Vincent Branchet." />
          </div>
          <div className="landingLinksWrapper">
            <ExternalLink 
              className={"landingLink"}
              href={this.props.links.linkedIn}
              target={"_blank"}
              text={<img src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`} alt="Logo du réseau social professionnel LinkedIn." />}
            />
            <ExternalLink 
              className={"landingLink"}
              href={this.props.links.github}
              target={"_blank"}
              text={<img src={`${process.env.PUBLIC_URL}/assets/img/github.png`} alt="Logo du réseau de développeurs et hébergeur Github." />}
            />
          </div>
        </div>
      );
    }
}

export default LandingPage;
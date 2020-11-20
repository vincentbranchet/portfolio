import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {

    renderCategoryButtons() {
      let buttons = [];
  
      buttons.push(
        <Link 
          className={`button menuButton menuInfoButton ${this.props.buttons[0].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[0].id)}
          to="/"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/profile-user.png`} alt="Symbole représentant le profil d'une personne et indiquant une page de présentation." />
          <span className ="menuButtonText">{this.props.buttons[0].text}</span>
        </Link>
      );
      buttons.push(
        <Link
          className={`button menuButton menuContactButton ${this.props.buttons[1].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[1].id)}
          to="/contact"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/mail.png`} alt="Symbole représentant une lettre et indiquant une page de contact." />
          <span className ="menuButtonText">{this.props.buttons[1].text}</span>
        </Link>
      );
      buttons.push(
        <Link 
          className={`button menuButton menuWebButton ${this.props.buttons[2].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[2].id)}
          to="/projets"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/coding.png`} alt="Logo d'un écran d'ordinateur représentant l'activité de programmer." />
          <span className ="menuButtonText">{this.props.buttons[2].text}</span>
        </Link>
      );
      buttons.push(
        <Link 
          className={`button menuButton menuGamesButton ${this.props.buttons[3].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[3].id)}
          to="/projets"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/gamepad.png`} alt="Logo d'une manette de jeu vidéo représentant la création de jeux." />
          <span className ="menuButtonText">{this.props.buttons[3].text}</span>
        </Link>
      );
      buttons.push(
        <Link 
          className={`button menuButton menuLitButton ${this.props.buttons[4].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[4].id)}
          to="/projets"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/quill.png`} alt="Logo d'une plume représentant l'activité d'écrire." />
          <span className ="menuButtonText">{this.props.buttons[4].text}</span>
        </Link>
      );
    
      return buttons;
    }
  
    render() {
      const buttons = this.renderCategoryButtons();
  
      return (
        <nav className="menuWrapper">
          <ul className="menuList">
            {buttons}
          </ul>
        </nav>
      );
    }
}

export default Menu;
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
          <img src={`${process.env.PUBLIC_URL}/assets/img/profile-user.png`} />
          <span className ="menuButtonText">{this.props.buttons[0].text}</span>
        </Link>
      );
      buttons.push(
        <Link
          className={`button menuButton menuContactButton ${this.props.buttons[1].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[1].id)}
          to="/contact"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/mail.png`} />
          <span className ="menuButtonText">{this.props.buttons[1].text}</span>
        </Link>
      );
      buttons.push(
        <Link 
          className={`button menuButton menuWebButton ${this.props.buttons[2].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[2].id)}
          to="/projets"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/coding.png`} />
          <span className ="menuButtonText">{this.props.buttons[2].text}</span>
        </Link>
      );
      buttons.push(
        <Link 
          className={`button menuButton menuGamesButton ${this.props.buttons[3].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[3].id)}
          to="/projets"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/gamepad.png`} />
          <span className ="menuButtonText">{this.props.buttons[3].text}</span>
        </Link>
      );
      buttons.push(
        <Link 
          className={`button menuButton menuLitButton ${this.props.buttons[4].isSelected ? "selected" : "unselected"}`} 
          onClick={() => this.props.onClick(this.props.buttons[4].id)}
          to="/projets"
        >
          <img src={`${process.env.PUBLIC_URL}/assets/img/quill.png`} />
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
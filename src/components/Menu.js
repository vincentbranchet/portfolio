import React from 'react';

class Menu extends React.Component {

    renderCategoryButtons() {
      let buttons = [];
  
      buttons.push(
        <li className={`button menuButton menuInfoButton ${this.props.buttons[0].isSelected ? "selected" : "unselected"}`} onClick={() => this.props.onClick(this.props.buttons[0].id)}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/profile-user.png`} />
          <span className ="menuButtonText">{this.props.buttons[0].text}</span>
        </li>
      );
      buttons.push(
        <li className={`button menuButton menuContactButton ${this.props.buttons[1].isSelected ? "selected" : "unselected"}`} onClick={() => this.props.onClick(this.props.buttons[1].id)}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/mail.png`} />
          <span className ="menuButtonText">{this.props.buttons[1].text}</span>
        </li>
      );
      buttons.push(
        <li className={`button menuButton menuWebButton ${this.props.buttons[2].isSelected ? "selected" : "unselected"}`} onClick={() => this.props.onClick(this.props.buttons[2].id)}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/coding.png`} />
          <span className ="menuButtonText">{this.props.buttons[2].text}</span>
        </li>
      );
      buttons.push(
        <li className={`button menuButton menuGamesButton ${this.props.buttons[3].isSelected ? "selected" : "unselected"}`} onClick={() => this.props.onClick(this.props.buttons[3].id)}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/gamepad.png`} />
          <span className ="menuButtonText">{this.props.buttons[3].text}</span>
        </li>
      );
      buttons.push(
        <li className={`button menuButton menuLitButton ${this.props.buttons[4].isSelected ? "selected" : "unselected"}`} onClick={() => this.props.onClick(this.props.buttons[4].id)}>
          <img src={`${process.env.PUBLIC_URL}/assets/img/quill.png`} />
          <span className ="menuButtonText">{this.props.buttons[4].text}</span>
        </li>
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
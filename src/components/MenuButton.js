import React from 'react';

class MenuButton extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div 
          className="menuButton" 
          onClick={this.props.onClick}>
          {this.text}
        </div>
      );
    }
}

const menuButton = new MenuButton;

export default menuButton;
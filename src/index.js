import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "projects", // 'projects' || 'info' || 'contact'
    }
  }

  routePage() {
    if(this.state.activePage === "projects") {
      return <ProjectPage />
    }
    else if(this.state.activePage === "info") {
      return <InfoPage />
    }
    else if(this.state.activePage === "contact") {
      return <ContactPage />
    }
    else {
      // error : wrong page state
    }
  }

  handlePageChange(newPage) {
    if(newPage === "projects") {
      this.setState({
        activePage: "projects",
      });
    }
    else if(newPage === "info") {
      this.setState({
        activePage: "info",
      });
    }
    else if(newPage === "contact") {
      this.setState({
        activePage: "contact",
      });
    }
    else {
      // error : requested page unknown
    }
  }

  render() {
    const page = this.routePage();

    return (
      <div className="mainWrapper">
        <Menu 
          onClick={(pageName) => this.handlePageChange(pageName)}
        />
        <div className="pageWrapper">
          {page}
        </div>
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div className="menuWrapper">
        <button className="menuButton menuInfoButton" onClick={() => this.props.onClick("info")}>Info</button>
        <button className="menuButton menuContactButton" onClick={() => this.props.onClick("contact")}>Contacts</button>
        <button className="menuButton menuProjectsButton" onClick={() => this.props.onClick("projects")}>Projects</button>
      </div>
    );
  }
}

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="projectPageWrapper">Projets</div>
    );
  }
}

class InfoPage extends React.Component {
  render() {
    return (
      <div className="infoPageWrapper">Info</div>
    );
  }
}

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contactPageWrapper">Contact</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
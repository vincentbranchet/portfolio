import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectStore from './stores/ProjectStore.js';
import MenuStore from './stores/MenuStore.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "info", // 'projects' || 'info' || 'contact'
      activeCategory: [], // 1 : web || 2 : games || 3 : literature
      projects: ProjectStore.getAll(),
      menuButtons: MenuStore.getAll(),
    }
  }

  componentDidMount() {

    MenuStore.on("buttonSwitch", () => {
      this.setState({
        menuButtons: MenuStore.getAll(),
        activeCategory: this.getActiveCategory(),
      });
    });
  }

  getActiveCategory() {
    const menuButtons = this.state.menuButtons.slice(0, this.state.menuButtons.length);
    let activeCategory = [];

    menuButtons.forEach(btn => {
      if(btn.category != null && btn.isSelected === true) {
        activeCategory.push(btn.category);
      }
    });
    
    return activeCategory;
  }

  getActiveButton() {
    const menuButtons = this.state.menuButtons.slice(0, this.state.menuButtons.length);
    let activeButton = [];

    menuButtons.forEach(btn => {
      if(btn.isSelected === true) {
        activeButton.push(btn);
      }
    });

    return activeButton;
  }

  routePage() {
    const activeCategory = this.state.activeCategory.slice(0, this.state.activeCategory.length);
    const projects = this.state.projects.slice(0, this.state.projects.length);
    const activeButton = this.getActiveButton();

    if(activeCategory.length > 0) {
      return (
        <ProjectPage
          category={activeCategory}
          projects={projects}
      />);
    }
    else if(activeButton.length === 1 && activeButton[0].id === 1) {
      return <InfoPage />
    }
    else if(activeButton.length === 1 && activeButton[0].id === 2) {
      return <ContactPage />
    }
    else {
      // error : wrong page state
    }
  }

  handleClickOnMenuButton(id) {

    MenuStore.toggleButton(id);
  }

  render() {
    const activeCategory = this.state.activeCategory.slice(0, this.state.activeCategory.length);
    const menuButtons = this.state.menuButtons.slice(0, this.state.menuButtons.length);
    const page = this.routePage();

    return (
      <div className="mainWrapper">
        <Menu 
          onClick={(id) => this.handleClickOnMenuButton(id)}
          category={activeCategory}
          buttons={menuButtons}
        />
        <div className="pageWrapper">
          {page}
        </div>
      </div>
    );
  }
}

class Menu extends React.Component {

  renderCategoryButtons() {
    let buttons = [];

    buttons.push(<button className="menuButton menuInfoButton" onClick={
      () => this.props.onClick(this.props.buttons[0].id)
    }>{this.props.buttons[0].text + " /" + this.props.buttons[0].isSelected}</button>);
    buttons.push(<button className="menuButton menuContactButton" onClick={
      () => this.props.onClick(this.props.buttons[1].id)
    }>{this.props.buttons[1].text + " /" + this.props.buttons[1].isSelected}</button>);
    buttons.push(<button className="menuButton menuProjectsButton" onClick={
      () => this.props.onClick(this.props.buttons[2].id)
    }>{this.props.buttons[2].text + " /" + this.props.buttons[2].isSelected}</button>);
    buttons.push(<button className="menuButton menuProjectsButton" onClick={
      () => this.props.onClick(this.props.buttons[3].id)
    }>{this.props.buttons[3].text + " /" + this.props.buttons[3].isSelected}</button>);
    buttons.push(<button className="menuButton menuProjectsButton" onClick={
      () => this.props.onClick(this.props.buttons[4].id)
    }>{this.props.buttons[4].text + " /" + this.props.buttons[4].isSelected}</button>);    
  
    return buttons;
  }

  render() {
    const buttons = this.renderCategoryButtons();

    return (
      <div className="menuWrapper">
        {buttons}
      </div>
    );
  }
}

class ProjectPage extends React.Component {
  fetchSelected() {
    const category = this.props.category;
    const projects = this.props.projects.slice(0, this.props.projects.length);
    let selected = [];

    // push all projects that match selected category with their primary category
    for(let i of category) {
      projects.forEach(proj => {
        if(i === proj.primaryCategory) {
          selected.push(proj);
          proj.activeWith = "primary";
        }
      });
    }

    // then, push all projects that match selected category with their secondary category & aren't already selected
    for(let i of category) {
      projects.forEach(proj => {
        const isSelected = selected.find((project) => project.id === proj.id);
        if(i === proj.secondaryCategory && typeof isSelected === "undefined") {
          selected.push(proj);
          proj.activeWith = "secondary";
        }
      });
    }

    // returned array has every project matching required categories activated for their primary category first
    return selected;
  }

  fetchCategory(nb) {
    if(nb === 1) {
      return "web";
    }
    else if(nb === 2) {
      return "games";
    }
    else if(nb === 3) {
      return "literature";
    }
    else {
      return "unknown category";
    }
  }

  render() {
    const selected = this.fetchSelected();
    let projects = [];

    selected.forEach(proj => {
      let projCategory = "";

      if(proj.activeWith === "primary") {
        projCategory = this.fetchCategory(proj.primaryCategory);
      }
      else if(proj.activeWith === "secondary") {
        projCategory = this.fetchCategory(proj.secondaryCategory);
      }

      projects.push(<div className="projectWrapper" key={proj.id}>{projCategory + ": " + proj.desc}</div>);
    });

    return (
      <div className="projectPageWrapper">{projects}</div>
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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectStore from './stores/ProjectStore.js';
import MenuStore from './stores/MenuStore.js';
import TextContentStore from './stores/TextContentStore.js';
import LinkStore from './stores/LinkStore.js';
import Menu from './components/Menu.js';
import ProjectPage from './components/ProjectPage.js';
import LandingPage from './components/LandingPage.js';
import ContactPage from './components/ContactPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "info", // 'projects' || 'info' || 'contact'
      activeCategory: [], // 1 : web || 2 : games || 3 : literature
      projects: ProjectStore.getAll(),
      menuButtons: MenuStore.getAll(),
      texts: TextContentStore.getAll(),
      links: LinkStore.getAll(),
      screenWidth: 0,
      screenHeight: 0,
    }
  }

  updateScreenDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  }

  componentDidMount() {
    this.updateScreenDimensions();

    window.addEventListener('resize', this.updateScreenDimensions.bind(this));

    ProjectStore.on("projectSwitch", () => {
      this.setState({
        projects: ProjectStore.getAll(),
      });
    });

    ProjectStore.on("categorySwitch", () => {
      this.setState({
        projects: ProjectStore.getAll(),
      });
    });

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
          width={this.state.screenWidth}
          onClick={(id) => this.handleClickOnProjectButton(id)}
      />);
    }
    else if(activeButton.length === 1 && activeButton[0].id === 1) {
      return (
        <LandingPage 
          text={this.state.texts.landing} 
          links={this.state.links}
        />);
    }
    else if(activeButton.length === 1 && activeButton[0].id === 2) {
      return (
        <ContactPage 
          text={this.state.texts.contact} 
          links={this.state.links}
        />
      );
    }
    else {
      // error : wrong page state
    }
  }

  handleClickOnMenuButton(id) {
    MenuStore.toggleButton(id);
    ProjectStore.toggleCategory(this.getActiveCategory());
  }

  handleClickOnProjectButton(id) {
    ProjectStore.toggleProject(id);
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
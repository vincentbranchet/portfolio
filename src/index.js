import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
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

    return (
      <Router>
      <div className="mainWrapper">
        <Menu 
          onClick={(id) => this.handleClickOnMenuButton(id)}
          category={activeCategory}
          buttons={menuButtons}
        />
        <div className="pageWrapper">
          <Switch>
              <Route 
              exact 
              path="/" 
              render={(...props) => (
                  <LandingPage {...props} 
                  text={this.state.texts.landing} 
                  links={this.state.links}  
                  /> 
              )}
              />
              <Route 
              exact 
              path="/contact" 
              render={(...props) => (
                  <ContactPage {...props} 
                  text={this.state.texts.contact} 
                  links={this.state.links}
                  /> 
              )}
              />
              <Route 
              exact 
              path="/projets" 
              render={(...props) => (
                  <ProjectPage {...props} 
                  category={this.state.category}
                  projects={this.state.projects}
                  width={this.state.screenWidth}
                  onClick={(id) => this.handleClickOnProjectButton(id)}
                  /> 
              )}
              />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
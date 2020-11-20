import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import ProjectStore from '../stores/ProjectStore.js';
import MenuStore from '../stores/MenuStore.js';
import TextContentStore from '../stores/TextContentStore.js';
import LinkStore from '../stores/LinkStore.js';
import Menu from './Menu.js';
import ProjectPage from './ProjectPage.js';
import LandingPage from './LandingPage.js';
import ContactPage from './ContactPage.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        prevPosition: this.getPosition(this.props.location),
      };
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

    componentWillReceiveProps() {
        this.setState({ 
            prevPosition: this.getPosition(this.props.location),
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

    getPosition(location) {
        const page = location.pathname;
        
        if(page === "/") return 1;
        else if(page === "/contact") return 2;
        else if(page === "/projets") return 3;
    }
  
    render() {
      const {location} = this.props;
      const activeCategory = this.state.activeCategory.slice(0, this.state.activeCategory.length);
      const menuButtons = this.state.menuButtons.slice(0, this.state.menuButtons.length);
      const currentKey = location.pathname; // page pathname from withRouter context used to trigger page transitions
      const direction = this.getPosition(location) > this.state.prevPosition ? "right" : "left";
      const pageStyle = {
        height: this.state.screenHeight,
      };
  
      return (
        <div className="mainWrapper" style={pageStyle}>
          <Menu 
            onClick={(id) => this.handleClickOnMenuButton(id)}
            category={activeCategory}
            buttons={menuButtons}
          />
          <div className="pageWrapper">
              <TransitionGroup component={null}>
                <CSSTransition
                  key={currentKey}
                  timeout={500}
                  classNames={"page-transition"}
                >
                  <Switch>
                    <Route 
                    exact 
                    path="/" 
                    render={(...props) => (
                        <LandingPage {...props}
                        direction={direction}
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
                        direction={direction}
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
                        screenHeight={this.state.screenHeight}
                        screenWidth={this.state.screenWidth}
                        direction={direction}
                        category={this.state.category}
                        projects={this.state.projects}
                        width={this.state.screenWidth}
                        onClick={(id) => this.handleClickOnProjectButton(id)}
                        /> 
                    )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
          </div>
        </div>
      );
    }
}

export default withRouter(App);
  
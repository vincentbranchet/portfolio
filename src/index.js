import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Project from './components/Project.js';
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
    <span id="dimensions">{this.state.screenHeight + " " + this.state.screenWidth}</span>
          {page}
        </div>
      </div>
    );
  }
}

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

class ProjectPage extends React.Component {
  fetchSelected() {
    const category = this.props.category;
    const projects = this.props.projects.slice(0, this.props.projects.length);
    let selected = [];

    // push all projects that match selected category with their primary category
    for(let i of category) {
      projects.forEach(proj => {

        if(i === proj.primaryCategory) {
          selected.push(
            <Project
              key={proj.id}
              id={proj.id}
              title={proj.title}
              desc={proj.desc}
              primaryCategory={proj.primaryCategory}
              secondaryCategory={proj.secondaryCategory}
              isSelected={proj.isSelected}
              isSmall={proj.isSmall}
              activeWith="primary"
              onClick={(id) => this.props.onClick(id)}
            />
          );
        }
      });
    }

    // then, push all projects that match selected category with their secondary category & aren't already selected
    for(let i of category) {
      projects.forEach(proj => {
        const isSelected = selected.find((project) => project.props.id == proj.id);
        if(i === proj.secondaryCategory && typeof isSelected === "undefined") {
          selected.push(
            <Project
              key={proj.id}
              id={proj.id}
              title={proj.title}
              desc={proj.desc}
              primaryCategory={proj.primaryCategory}
              secondaryCategory={proj.secondaryCategory}
              isSelected={proj.isSelected}
              isSmall={proj.isSmall}
              activeWith="secondary"
              onClick={(id) => this.onClick(id)}
            />
          );
        }
      });
    }

    // returned array has every project matching required categories activated for their primary category first
    return selected;
  }

  render() {
    const projects = this.fetchSelected();

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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectStore from './stores/ProjectStore.js';
import MenuStore from './stores/MenuStore.js';
import TextContentStore from './stores/TextContentStore';
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
      return <LandingPage text={this.props.texts.landing} />
    }
    else if(activeButton.length === 1 && activeButton[0].id === 2) {
      return <ContactPage text={this.props.texts.landing} />
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

<<<<<<< HEAD
=======
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
    let sorted = [];

    // push all projects that match selected category with their primary category
    for(let i of category) {
      projects.forEach(proj => {
        if(i === proj.primaryCategory) {
          proj.activeWith = "primary";
          selected.push(proj);          
        }
      });
    }

    // then, push all projects that match selected category with their secondary category & aren't already selected
    for(let i of category) {
      projects.forEach(proj => {
        const isSelected = selected.find((project) => project.id == proj.id);
        if(i === proj.secondaryCategory && typeof isSelected === "undefined") {
          proj.activeWith = "secondary";
          selected.push(proj);
        }
      });
    }

    // sort by score
    sorted = selected.sort((a, b) => b.score - a.score);

    // returned array has every project matching required categories activated for their primary category first
    return sorted;
  }

  renderProjectLineOf(projects, range, startingFrom = 0) {
    let line = [];

    for(let i = startingFrom; i < range; i++) {
      if(projects[i]) line.push(this.renderProject(projects[i]));
    }

    return line;
  }

  renderProject(proj) { // where proj is an object used to hydrate a Project component
    return (
      <Project
        key={proj.id}
        id={proj.id}
        title={proj.title}
        desc={proj.desc}
        feats={proj.feats}
        links={proj.links}
        img={proj.img}
        score={proj.score}
        primaryCategory={proj.primaryCategory}
        secondaryCategory={proj.secondaryCategory}
        isSelected={proj.isSelected}
        isSmall={proj.isSmall}
        activeWith={proj.activeWith}
        onClick={(id) => this.props.onClick(id)}
      />
    );
  }

  // 1 project per line until 1083px width, 2 projects per line until 1577, 3 projects per line above that
  render() {
    const projects = this.fetchSelected();
    let rendered = [];

    let xRange = 0;
    let firstInLine = 0;
    if(this.props.width < 1083) xRange = 1;
    else if(this.props.width < 1577) xRange = 2;
    else xRange = 3;
    const yRange = Math.ceil(projects.length / xRange);
    
    for(let i = 0; i < yRange; i++) {
      const line = this.renderProjectLineOf(projects, (firstInLine + xRange), firstInLine);

      rendered.push(<div key={i} className={`projectLine`}>{line}</div>);

      firstInLine += xRange;
    }

    return (
      <div className="projectPageWrapper">
        {rendered}
      </div>
    );
  }
}

class InfoPage extends React.Component {
  render() {
    return (
      <div className="landingPageWrapper">
        <div className="landingPresentationWrapper">

        </div>
        <div className="landingLinksWrapper">

        </div>
      </div>
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

>>>>>>> 78cd43e... added first bit of layout
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
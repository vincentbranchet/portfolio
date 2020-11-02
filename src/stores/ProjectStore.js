import { EventEmitter } from 'events';

class ProjectStore extends EventEmitter {
    constructor(props) {
      super(props);
  
      this.projects = [
        {
          id: 1,
          title: "Late For Love",
          desc: "jeu",
          img: "lateforlove.jpg",
          primaryCategory: 2,
          secondaryCategory: null,
          isSelected: false,
          isSmall: false,
        },
        {
          id: 2,
          title: "projet 2",
          desc: "appli web",
          img: "",
          primaryCategory: 1,
          secondaryCategory: null,      
          isSelected: false,
          isSmall: false,
        },
        {
          id: 3,
          title: "projet 3",
          desc: "surtout appli web mais aussi jeu",
          img: "",
          primaryCategory: 1,
          secondaryCategory: 2,     
          isSelected: false,
          isSmall: false,
        },
        {
          id: 4,
          title: "projet 4",
          desc: "nouvelle de fiction",
          img: "",
          primaryCategory: 3,
          secondaryCategory: null,       
          isSelected: false,
          isSmall: false,
        }
      ];
    }

    /* 
      Switchs one project from open to closed and closed to open, and when a project opens, shrinks every other project's size
      Called each time the user clicks on a open/close project button
    */
    toggleProject(id) {
      let clickedProject = this.projects.find((proj) => proj.id === id);
      const indexOfClicked = this.projects.indexOf(clickedProject);
      let projects = this.projects.slice(0, this.projects.length);
      
      projects.splice(indexOfClicked, 1);

      projects.forEach((proj) => proj.isSelected = false);
      
      clickedProject.isSelected = !clickedProject.isSelected;

      projects.push(clickedProject);

      projects.forEach((proj) => proj.isSmall = false);

      if(clickedProject.isSelected === true) {
        projects.forEach((proj) => {
          if(proj.isSelected === false) proj.isSmall = true;
        });
      }

      this.emit("projectSwitch");
    }
  
    getAll() {
      return this.projects;
    }
}

const projectStore = new ProjectStore;

export default projectStore;
  
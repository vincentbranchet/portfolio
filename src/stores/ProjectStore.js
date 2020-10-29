import { EventEmitter } from 'events';

class ProjectStore extends EventEmitter {
    constructor(props) {
      super(props);
  
      this.projects = [
        {
          id: 1,
          title: "projet 1",
          desc: "jeu",
          primaryCategory: 2,
          secondaryCategory: null,
          isSelected: false,
        },
        {
          id: 2,
          title: "projet 2",
          desc: "appli web",
          primaryCategory: 1,
          secondaryCategory: null,      
          isSelected: false,
        },
        {
          id: 3,
          title: "projet 3",
          desc: "surtout appli web mais aussi jeu",
          primaryCategory: 1,
          secondaryCategory: 2,     
          isSelected: false,
        },
        {
          id: 4,
          title: "projet 4",
          desc: "nouvelle de fiction",
          primaryCategory: 3,
          secondaryCategory: null,       
          isSelected: false,
        }
      ];
    }

    toggleProject(id) {
      let clickedProject = this.projects.find((proj) => proj.id === id);
      const indexOfClicked = this.projects.indexOf(clickedProject);
      const projects = this.projects.slice(0, this.projects.length);
      
      projects.splice(indexOfClicked, 1);

      projects.forEach((proj) => proj.isSelected = false);
      clickedProject.isSelected = !clickedProject.isSelected;

      this.emit("projectSwitch");
    }
  
    getAll() {
      return this.projects;
    }
}

const projectStore = new ProjectStore;

export default projectStore;
  
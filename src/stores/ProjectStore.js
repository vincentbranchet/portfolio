import { EventEmitter } from 'events';

class ProjectStore extends EventEmitter {
    constructor(props) {
      super(props);
  
      this.projects = [
        {
          id: 1,
          name: "projet 1",
          desc: "jeu",
          primaryCategory: 2,
          secondaryCategory: null,
        },
        {
          id: 2,
          name: "projet 2",
          desc: "appli web",
          primaryCategory: 1,
          secondaryCategory: null,      
        },
        {
          id: 3,
          name: "projet 3",
          desc: "surtout appli web mais aussi jeu",
          primaryCategory: 1,
          secondaryCategory: 2,     
        },
        {
          id: 4,
          name: "projet 4",
          desc: "nouvelle de fiction",
          primaryCategory: 3,
          secondaryCategory: null,       
        }
      ];
    }
  
    getAll() {
      return this.projects;
    }
}

const projectStore = new ProjectStore;

export default projectStore;
  
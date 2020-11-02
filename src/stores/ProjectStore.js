import { EventEmitter } from 'events';

class ProjectStore extends EventEmitter {
    constructor(props) {
      super(props);
  
      this.projects = [
        {
          id: 1,
          title: "Late For Love",
          desc: "Late For Love est un jeu conciliant les genres dating sim et racing game. Au volant pour conduire votre amie d'enfance à son mariage, alors que vous tâchez de rattraper votre retard, une conversation avec la future mariée fait resurgir d'anciens sentiments. Jeu court, conçu pour mobile, développé en collaboration avec deux personnes à l'occasion de la 41ème Ludum Dare.",
          feats: [
            "Narrative design",
            "Dialogues",
            "Arborescence",
            "World building",
            "Game design"
          ],
          links: [
            {
              text: "Newgrounds",
              url: "https://www.newgrounds.com/portal/view/710414"
            },
            {
              text: "Itch.io",
              url: "https://gaze-team.itch.io/late-for-love"
            },
            {
              text: "LD41",
              url: "https://ldjam.com/events/ludum-dare/41/late-for-love"
            }
          ],
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
          feats: [],
          links: [],
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
          feats: [],
          links: [],
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
          feats: [],
          links: [],
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
  
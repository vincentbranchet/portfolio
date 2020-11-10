import { EventEmitter } from 'events';

class ProjectStore extends EventEmitter {
    constructor(props) {
      super(props);
  
      this.projects = [
        {
          id: 1,
          title: "Late For Love",
          desc: "Late For Love est un jeu conciliant les genres dating sim et racing game. Au volant pour conduire votre amie d'enfance à son mariage, alors que vous tâchez de rattraper votre retard, une conversation avec la future mariée fait resurgir d'anciens sentiments. Jeu court, conçu pour mobile, développé en collaboration avec deux personnes à l'occasion de la 41ème Ludum Dare. J'ai conçu et réalisé l'enveloppe narrative du jeu, en plus de participer à la conception de ses mécaniques.",
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
          score: 75,
          primaryCategory: 2,
          secondaryCategory: 3,
          isSelected: false,
          isSmall: false,
        },
        {
          id: 2,
          title: "Lazy Little Humans",
          desc: "Prototype web d'un jeu mobile, développé à des fins de démarchage d'éditeurs. Lazy Little Humans est un jeu mobile dans lequel vous incarnez un algorithme chargé d'envoyer des recommandations aux gens. J'ai développé l'application en deux mois, après plusieurs mois de travail de pré-production en tant lead game designer et narrative designer. L'équipe comportait également un producteur (4Cid Productions), un auteur et un graphiste (qui n'a pas travaillé sur ce prototype).",
          feats: [
            "Javascript ES6, jQuery, HTML, CSS",
            "Responsive design",
            "Git/Github",
            "Game design",
            "Narrative design",
            "Mobile",
          ],
          links: [
            {
              text: "Jouer (mobile friendly)",
              url: "http://lazylittlehumans.com"
            },
            {
              text: "4Cid",
              url: " https://www.4cidproductions.com/"
            }
          ],
          img: "",
          score: 100,
          primaryCategory: 1,
          secondaryCategory: 2,      
          isSelected: false,
          isSmall: false,
        },
        {
          id: 3,
          title: "Sauver la vérité",
          desc: "Sauver la vérité est un jeu web que j'ai conçu et produit seul peu après avoir quitté mon poste de journaliste au groupe Les Echos, et qui traite de la façon dont les journalistes se défendent face aux fake news. C'est un jeu court, inspiré des clicker games, avec un leaderboard en PHP, une direction artistique rétro et du contenu textuel dont je suis l'auteur. Il s'agit de l'un de mes premiers projets d'application web.",
          feats: [
            "Javascript, jQuery, PHP, HTML, CSS",
            "Game design",
            "Narrative design",
          ],
          links: [
            {
              text: "Jouer (mobile friendly)",
              url: "http://fullturtle.com/sauverlaverite/game.php"
            },
            {
              text: "Github",
              url: "https://github.com/vincentbranchet/projet-5-OC"
            }
          ],
          img: "slv.png",
          score: 50,
          primaryCategory: 1,
          secondaryCategory: 2,     
          isSelected: false,
          isSmall: false,
        },
        {
          id: 4,
          title: "Blog",
          desc: "Application de blog 'clés en main' à destination de clients écrivains, auteurs, scénaristes, etc. Comporte une interface front affichant des articles et permettant aux lecteurs de poster des commentaires, et une interface administrateur back sécurisée permettant au client de rédiger des articles et modérer les commentaires. J'ai développé cette application sous la supervision d'un développeur senior, sans framework excepté jQuery.",
          feats: [
            "Javascript, jQuery, PHP, SQL, HTML, CSS",
            "Responsive design",
            "UI/UX",
            "Git/Github",
          ],
          links: [
            {
              text: "Github",
              url: "https://github.com/vincentbranchet/Projet-4-OC"
            }
          ],
          img: "blog.png",
          score: 40,
          primaryCategory: 1,
          secondaryCategory: null,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 5,
          title: "Application Vélib'",
          desc: "Single-page application de réservation de vélib', se basant sur l'ancienne API Vélib' JC Decaux. L'application permettait de visualier les emplacements de bornes vélib' à Paris sur une carte gmap, d'en sélectionner une, de visualiser le nombre de vélib' disponibles à cette borne et, si possible, de signer pour effectuer une (fausse) réservation de vingt minutes. La fermeture de l'API a rendu cette application inactive.",
          feats: [
            "Javascript, jQuery, PHP, HTML, CSS",
            "API Rest",
            "UI/UX",
            "Responsive design",
          ],
          links: [],
          img: "velib.png",
          score: 30,
          primaryCategory: 1,
          secondaryCategory: null,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 6,
          title: "Ma Première Tournée",
          desc: "Serious game ayant pour thème les maladies nosocomiales, dans lequel vous incarnez un.e infirmier.e lors de son ou sa première journée de travail. Ma première tournée est une fiction interactive courte, conçue et écrite en trois jours à partir d'un petit dossier de modèles de personnages 2D.",
          feats: [
            "Twine",
            "Game design",
            "Narrative design",
            "Dialogues",
            "Arborescence",
          ],
          links: [],
          img: "mapremiere.png",
          score: 60,
          primaryCategory: 2,
          secondaryCategory: 3,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 7,
          title: "Projet Rainbow",
          desc: "Jeu mobile de type arcade dans lequel une panne oblige les personnages du jeu à sortir des coulisses. J'étais narrative designer sur ce projet, qui a été avorté en phase de préproduction faute de disponibilités des membres de l'équipe. J'avais écrit des scripts mettant en scène les personanges pour une version de démonstration.",
          feats: [
            "Twine",
            "Game design",
            "Narrative design",
            "Dialogues",
            "Arborescence",
          ],
          links: [
            {
              text: "Documents de design",
              url: "https://drive.google.com/drive/folders/1KekkqGlD0ZNGcDu6pd15Usx8LF6YHJrA?usp=sharing"
            }
          ],
          img: "rainbow.png",
          score: 30,
          primaryCategory: 2,
          secondaryCategory: 3,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 8,
          title: "À Chacun sa place",
          desc: "Nouvelle de science-fiction dans laquelle un jeune adulte rêve éveillé lors de sa première journée de travail. Ecrit à l'occasion d'un concours de nouvelles de science-fiction organisé par l'institut Kervégan.",
          feats: [
            "Nouvelle",
            "Science-fiction",
            "30 000 signes",
          ],
          links: [
            {
              text: "Texte (gdoc)",
              url: "https://docs.google.com/document/d/1UmaQrtMrG88PJ_x00r7mkSQfDMiiaqUvXDTKXT-24uY/edit?usp=sharing"
            }
          ],
          img: "kervegan.png",
          score: 40,
          primaryCategory: 3,
          secondaryCategory: null,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 9,
          title: "Le Deuxième Soleil",
          desc: "Nouvelle de science-fiction dans laquelle deux amis descendent dans les profondeurs de la Terre. Ecrit à l'occasion d'un concours de nouvelles de science-fiction organisé par la revue Galaxies.",
          feats: [
            "Nouvelle",
            "Science-fiction",
            "30 000 signes",
          ],
          links: [
            {
              text: "Texte (gdoc)",
              url: "https://docs.google.com/document/d/1g4gBNwDjsgTqegRsIfrwo48xZr1Xo5KInQvXSbVbGIg/edit?usp=sharing"
            }
          ],
          img: "deuxiemesoleil.png",
          score: 50,
          primaryCategory: 3,
          secondaryCategory: null,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 10,
          title: "Portfolio",
          desc: "L'application web sur laquelle vous vous trouvez ! Je l'ai conçue et développée sous React/Redux. Je souhaitais un portfolio professionnel qui puisse afficher mes travaux dans trois domaines différents de la façon la plus claire et cohérente possible, tout en me permettant d'ajouter facilement de nouveaux projets à l'avenir.",
          feats: [
            "Javascript, React, Redux, HTML, CSS",
            "Responsive design",
            "UI/UX",
            "Wireframing (Miro)",
          ],
          links: [
            {
              text: "Github",
              url: "https://github.com/vincentbranchet/portfolio"
            }
          ],
          img: "ici.png",
          score: 90,
          primaryCategory: 1,
          secondaryCategory: null,       
          isSelected: false,
          isSmall: false,
        },
        {
          id: 11,
          title: "Projet Anonyme",
          desc: "Pendant plusieurs mois, j'ai conçu et développé avec un ami des concepts de jeu autour d'une intention de design liée aux relations sociales. Nous avons essayé un certain nombres d'approches très différentes sans en trouver une qui nous paraisse exploitable, et avons finalement dû cesser nos travaux. Je m'occupais en particulier de l'aspect narratif des concepts que nous avons développés.",
          feats: [
            "Game design",
            "Narrative design",
            "Unity",
          ],
          links: [
            {
              text: "Documents de design",
              url: "https://drive.google.com/drive/folders/1aT3ZM_cpeWnErR5tTi5oE7jge4soM4n_?usp=sharing"
            }
          ],
          img: "idea.png",
          score: 45,
          primaryCategory: 2,
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
  
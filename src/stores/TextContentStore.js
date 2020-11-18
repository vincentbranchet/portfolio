import React from 'react';

class TextContentStore extends React.Component {
    constructor(props) {
        super(props);

        this.texts = {
            landing: `Vous êtes sur le portfolio de Vincent Branchet, développeur freelance d'applications web et narrative designer de jeux vidéo. Ce portfolio présente certains de mes travaux en développement web, en jeu vidéo ainsi que des textes de fiction dont je suis l'auteur.
            
            Je suis actuellement à la recherche de missions freelance ou d'un poste salarié. Si vous avez besoin de main forte en narrative design, en game design ou en développement web front-end, n'hésitez pas à me contacter !`,
            
            contact: `Le meilleur moyen de me contacter est de m'envoyer un mail. Je réponds généralement dans la demi-journée. Je suis aussi joignable par téléphone, SMS, Whatsapp et Telegram. 
            
            Si vous m'appelez et je ne réponds pas n'hésitez pas à me laisser un message ; je vous rappellerai très vite.`,
        }
    }
    
    getAll() {
        return this.texts;
    }
}

const textContentStore = new TextContentStore;

export default textContentStore;
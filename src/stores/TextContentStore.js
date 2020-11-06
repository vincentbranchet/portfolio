import React from 'react';

class TextContentStore extends React.Component {
    constructor(props) {
        super(props);

        this.texts = {
            landing: "Je m'appelle Vincent Branchet et je suis développeur freelance d'applications web et de jeux vidéo. Ce portfolio présente certains de mes travaux en développement web, en jeu vidéo ainsi que des textes de fiction dont je suis l'auteur. Si vous avez besoin de main forte en narrative design, en game design ou en développement web front-end, n'hésitez pas à me contacter !",
            contact: "Le meilleur moyen de me contacter est de m'envoyer un mail. Je réponds généralement dans la demi-journée. Je suis aussi joignable sur Whatsapp via mon numéro de téléphone. Si vous m'appelez et que je ne réponds pas, n'hésitez pas à me laisser un message vocal afin que je vous rappelle.",
        }
    }
    
    getAll() {
        return this.texts;
    }
}

const textContentStore = new TextContentStore;

export default textContentStore;
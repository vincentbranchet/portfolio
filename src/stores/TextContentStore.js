import React from 'react';

class TextContentStore extends React.Component {
    constructor(props) {
        super(props);

        this.texts = {           
            contact: `Le meilleur moyen de me contacter est de m'envoyer un mail. Je réponds généralement dans la demi-journée.`,
        }
    }
    
    getAll() {
        return this.texts;
    }
}

const textContentStore = new TextContentStore;

export default textContentStore;
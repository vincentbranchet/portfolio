import React from 'react';

class LinkStore extends React.Component {
    constructor(props) {
        super(props);

        this.links = {
            linkedIn: "https://www.linkedin.com/in/vincent-branchet-226a2752/", 
            github: "https://github.com/vincentbranchet",
        }
    }
    
    getAll() {
        return this.links;
    }
}

const linkStore = new LinkStore;

export default linkStore;
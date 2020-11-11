import { EventEmitter } from 'events';
import MenuButton from '../components/MenuButton.js'

class MenuStore extends EventEmitter {
    constructor(props) {
        super(props);

        this.buttons = [
            {
                id: 1,
                comp: <MenuButton />,
                text: "Présentation",
                category: null,
                isSelected: true,
            },
            {
                id: 2,
                comp: <MenuButton />,
                text: "Contact",
                category: null,
                isSelected: false,
            },
            {
                id: 3,
                comp: <MenuButton />,
                text: "Web",
                category: 1,
                isSelected: false,
            },
            {
                id: 4,
                comp: <MenuButton />,
                text: "Jeux",
                category: 2,
                isSelected: false,
            },
            {
                id: 5,
                comp: <MenuButton />,
                text: "Textes",
                category: 3,
                isSelected: false,
            }
        ];
    }

    toggleButton(id) {
        let clickedButton = this.buttons.find((btns) => btns.id === id);
        let contactBtn = this.buttons.find((btn) => btn.id === 2);
        let infoBtn = this.buttons.find((btn) => btn.id === 1);
        let categoryButtons = this.buttons.slice(2);

        if(id === 1 && infoBtn.isSelected === false) {
        // if user clicks to activate info button
            infoBtn.isSelected = true;
            contactBtn.isSelected = false;
            categoryButtons.forEach((btn) => btn.isSelected = false);
        }
        else if(id === 2 && contactBtn.isSelected === false) {
        // if user clicks to activate contact button
            contactBtn.isSelected = true;
            infoBtn.isSelected = false;
            categoryButtons.forEach((btn) => btn.isSelected = false);
        }
        else if(id === 3 || id === 4 || id === 5) {
        // if user clicks to switch any category button
            infoBtn.isSelected = false;
            contactBtn.isSelected = false;
            clickedButton.isSelected = !clickedButton.isSelected;
        }
        else {
        // error
        }

        this.emit("buttonSwitch");
    }

    getAll() {
        return this.buttons;
    }
}

const menuStore = new MenuStore;

export default menuStore;
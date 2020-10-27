import { EventEmitter } from 'events';
import MenuButton from '../components/MenuButton.js'

class MenuStore extends EventEmitter {
    constructor(props) {
        super(props);

        this.buttons = [
            {
                id: 1,
                comp: <MenuButton />,
                text: "Info",
                category: null,
                isSelected: true,
            },
            {
                id: 2,
                comp: <MenuButton />,
                text: "Contacts",
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
                text: "Games",
                category: 2,
                isSelected: false,
            },
            {
                id: 5,
                comp: <MenuButton />,
                text: "Literature",
                category: 3,
                isSelected: false,
            }
        ];
    }

    getAll() {
        return this.buttons;
    }
}

const menuStore = new MenuStore;

export default menuStore;
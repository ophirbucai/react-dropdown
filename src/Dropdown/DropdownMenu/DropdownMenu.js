import React, {useContext} from 'react';
import {DropdownContext} from "../dropdown-context";
import './DropdownMenu.css';

function DropdownMenu(props) {

    const {isDropdownShown} = useContext(DropdownContext);

    return (
        <ul style={{display: isDropdownShown ? 'block' : 'none'}}>
            {props.children}
        </ul>
    );
}

export default DropdownMenu;
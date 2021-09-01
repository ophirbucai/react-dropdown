import React, {useContext} from 'react';
import {DropdownContext} from "../dropdown-context";
import './DropdownMenu.css';

function DropdownMenu(props) {
    const {isDropdownShown} = useContext(DropdownContext);

    return (
        <React.Fragment>
            {isDropdownShown && <ul>{props.children}</ul>}
        </React.Fragment>
    );
}

export default DropdownMenu;
import React, {useContext} from 'react';
import {DropdownContext} from "../dropdown-context";
import './DropdownMenu.css';

function DropdownMenu(props) {

    const {isDropdownShown, domNode} = useContext(DropdownContext);

    return (
        <React.Fragment>
            {isDropdownShown && <ul ref={domNode}>{props.children}</ul>}
        </React.Fragment>
    );
}

export default DropdownMenu;
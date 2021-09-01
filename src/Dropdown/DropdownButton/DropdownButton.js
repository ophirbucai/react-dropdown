import React, {useContext} from 'react';
import {DropdownContext} from "../dropdown-context";
import './DropdownButton.css';

function DropdownButton({value}) {
    const {isDropdownShown, setIsDropdownShown} = useContext(DropdownContext);

    const handleClick = () => {
        setIsDropdownShown(!isDropdownShown);
    }

    return (
        <button onClick={handleClick}>{value}</button>
    );
}

export default DropdownButton;
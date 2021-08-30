import React, {useEffect, useContext} from 'react';
import {DropdownContext} from "../dropdown-context";
import './DropdownButton.css';

function DropdownButton({value}) {

    const {isDropdownShown, setIsDropdownShown} = useContext(DropdownContext);

    useEffect(() => {
        document.addEventListener('click', () => {
            setIsDropdownShown(false);
        })
        // eslint-disable-next-line
    }, []);

    const handleClick = e => {
        e.stopPropagation();
        setIsDropdownShown(!isDropdownShown);
    }

    return (
        <button onClick={handleClick}>{value}</button>
    );
}

export default DropdownButton;
import React, {useEffect, useContext} from 'react';
import {DropdownContext} from "../dropdown-context";
import './DropdownButton.css';

function DropdownButton({value}) {

    const {isDropdownShown, setIsDropdownShown} = useContext(DropdownContext);

    useEffect(() => {
        const handler = () => setIsDropdownShown(false);
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler)// eslint-disable-next-line
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
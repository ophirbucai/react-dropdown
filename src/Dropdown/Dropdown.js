import React, {useState} from 'react';
import {DropdownContext} from "./dropdown-context";
import useClickOutside from '../hooks/useClickOutside';

function Dropdown(props) {
    const [isDropdownShown, setIsDropdownShown] = useState(false);

    let domNode = useClickOutside(() => {
        setIsDropdownShown(false);
    })

    return (
        <div className="dropdown" ref={domNode}>
            <DropdownContext.Provider value={{isDropdownShown, setIsDropdownShown}}>
                {props.children}
            </DropdownContext.Provider>
        </div>
    );
}

export default Dropdown;
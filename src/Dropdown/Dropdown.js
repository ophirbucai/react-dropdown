import React, {useState} from 'react';
import {DropdownContext} from "./dropdown-context";

function Dropdown(props) {
    const [isDropdownShown, setIsDropdownShown] = useState(false);

    return (
        <div className="dropdown">
            <DropdownContext.Provider value={{isDropdownShown, setIsDropdownShown}}>
                {props.children}
            </DropdownContext.Provider>
        </div>
    );
}

export default Dropdown;
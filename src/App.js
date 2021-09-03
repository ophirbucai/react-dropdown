import React from "react";
import './App.css';
<<<<<<< HEAD
import {
    Dropdown,
    DropdownButton,
    DropdownMenu,
    DropdownItem
} from './Dropdown';
=======
import {Dropdown, DropdownButton, DropdownMenu, DropdownItem} from './Dropdown';
>>>>>>> 3735dd4041456062496a101ae0ea17c29373fffa

function App() {

  return (
    <div className="App">
        <Dropdown>
            <DropdownButton value="Dropdown button" />
            <DropdownMenu>
                <DropdownItem value="Action" link="/action" />
                <DropdownItem value="Another action" link="/another-action" />
                <DropdownItem value="Something else" link="/something" />
                <DropdownItem value="Stay on this page" on="div" />
            </DropdownMenu>
        </Dropdown>
    </div>
  );
}

export default App;

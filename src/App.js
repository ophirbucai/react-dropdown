import React from "react";
import './App.css';
import {Dropdown, DropdownButton, DropdownMenu, DropdownItem} from './Dropdown';

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

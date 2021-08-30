import React from "react";
import './App.css';
import Dropdown from './Dropdown/Dropdown';
import DropdownButton from "./Dropdown/DropdownButton/DropdownButton";
import DropdownMenu from "./Dropdown/DropdownMenu/DropdownMenu";
import DropdownItem from "./Dropdown/DropdownMenu/DropdownItem/DropdownItem";

function App() {

  return (
    <div className="App">
        <Dropdown>
            <DropdownButton value="Dropdown button" />
            <DropdownMenu>
                <DropdownItem value="Action" link="/action" />
                <DropdownItem value="Another action" link="/another-action" />
                <DropdownItem value="Something else" link="/something" />
            </DropdownMenu>
        </Dropdown>
    </div>
  );
}

export default App;

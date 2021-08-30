import React from 'react';

function DropdownItem({value, link}) {
    return (
        <li>
            <a href={link}>{value}</a>
        </li>
    );
}

export default DropdownItem;
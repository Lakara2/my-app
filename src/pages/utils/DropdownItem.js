import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

function DropdownItem() {
  const pic = '../../Dashboard/img/undraw_profile_2.png';
  return (
    <Dropdown.Item href="#/action-1">
      <Link to="/profile" className="dropdown-item">
        <img
          src={pic}
          alt="Profile"
          className="rounded-circle imm profile-pic"
        />
      </Link>
      <Link to="/settings" className="dropdown-item">
        Settings
      </Link>
      <Link to="/dark-mode" className="dropdown-item">
        Dark Mode
      </Link>
      <NavDropdown.Divider />
      <Link to="/logout" className="dropdown-item">
        <button className='btn btn-light'>Logout</button>
      </Link>
      </Dropdown.Item>
  );
}

export default DropdownItem;
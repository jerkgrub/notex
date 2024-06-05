import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>

        <li>
          {/* note x logo */}
          <label className='navLabel'>Exceptional Note X</label>

          {/* home link */}
          <NavLink to="/note/new" ClassName="activeLink">
            Home
          </NavLink>
        </li>

        {/* My Notes */}
        <li>
          <NavLink to="/note/all" ClassName="activeLink">
            My Notes
          </NavLink>
        </li>
        
  {/* below are To-follow features*/}
  
<li className='calendarNav'>
<NavLink ClassName="activeLink">
Calendar
</NavLink>
</li>

<li className='loginNav'>
<NavLink ClassName="activeLink">
Log In
</NavLink>
</li> 

<li className='ShareNav'>
<NavLink ClassName="activeLink">
Share 
</NavLink>
</li>
      </ul>
    </nav>
  );
};

export default NavBar;

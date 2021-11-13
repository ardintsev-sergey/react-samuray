import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li className={`${classes.item} ${classes.active}`}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
        <li className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
        <li className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></li>
        <li className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></li>
        <li className={classes.item}>
          <NavLink to="/friends" activeClassName={classes.active}>Friends
        
          </NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
import React from 'react';

import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { makeClass } from '../../utils';

const Nav = ({ isHome }) => {
  const className = makeClass(
    styles.Nav,
    isHome ? styles.HomeWidth : null
  );

  return (
    <div className={className}>
      <NavLink activeClassName={styles.active} to="/" exact>Home</NavLink>
      <NavLink activeClassName={styles.active} to="/projects">Projects</NavLink>
      <div className={styles.Logo}>
        <img src="/images/logo.png" alt="Aporcypha Logo" />
      </div>
      <NavLink activeClassName={styles.active} to="/team">About Me</NavLink>
      <NavLink activeClassName={styles.active} to="/contact">Contact Me</NavLink>
    </div>
  );
}

export default Nav;
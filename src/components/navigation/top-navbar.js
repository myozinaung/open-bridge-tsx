import styles from "./top-navbar.module.css";
import { ReactComponent as NavMenuIcon } from "../../assets/icons/nav-menu-icon.svg";
import { ReactComponent as AlertIcon } from "../../assets/icons/alert-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import { ReactComponent as DimmingIcon } from "../../assets/icons/dimming-icon.svg";
import { ReactComponent as AppsIcon } from "../../assets/icons/apps-icon.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function TopNavbar() {
  return (
    <ul className={styles.topNavbarContainer}>
      <TopNavbarLeft />
      <TopNavbarMiddle />
      <TopNavbarRight />
    </ul>
  );
}

function TopNavbarLeft() {
  return (
    <nav className={styles.topNavbarLeftContainer}>
      <NavItem icon={<NavMenuIcon />} />
    </nav>
  );
}

function TopNavbarMiddle() {
  return (
    <nav className={styles.topNavbarMiddleContainer}>
      <h1>Top Navbar Middle</h1>
    </nav>
  );
}

function TopNavbarRight() {
  return (
    <nav className={styles.topNavbarRightContainer}>
      <NavItem icon={<AlertIcon />} />
      <NavItem icon={<UserIcon />} />
      <NavItem icon={<DimmingIcon />}>
        {/* <DropdownMenu></DropdownMenu> */}
      </NavItem>
      <NavItem icon={<AppsIcon />} />
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default TopNavbar;

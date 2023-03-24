import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarElement";

function Navbar() {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/projects" activeStyle>
              Projects
            </NavLink>
            <NavLink to="/experience" activeStyle>
              Experience
            </NavLink>
            <NavLink to="/creations" activeStyle>
              Other Creations
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
}

export default Navbar;

import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
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
};

export default Navbar;
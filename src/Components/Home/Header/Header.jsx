import { useRef, useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu } from "./Menu.jsx";
import { DesktopMenu } from "./DesktopMenu.jsx";
import StyledHeader from "./HeaderStyles.jsx";
import Close from '../../../SVG/Close.jsx';
import Hamburger from '../../../SVG/Hamburger.jsx';


const Header = (props) => {
    const [menuStatus, setMenuStatus] = useState(false);
    const backdropRef = useRef();

    const openMenu = () => {
      setMenuStatus(true);
    };
    const closeMenu = () => {
      setMenuStatus(false);
    };
    const checkHandler = (event) => {
      if (event.target === backdropRef.current) closeMenu();
    };

    return (
      <StyledHeader id='header'>

        <HashLink id='title-box' smooth to="/#home">
            <div className="profileImage"></div>
            <h2>Gio Katamadze</h2>
        </HashLink>

        <div className="menuIcon">
          {menuStatus ? (
            <Close onClick={closeMenu} />
          ) : (
            <Hamburger onClick={openMenu} />
          )}
        </div>

        <DesktopMenu/>

        {menuStatus && (
        <div className="menuDiv"
            ref={backdropRef}
            onClick={checkHandler}
          >
            <Menu/>
        </div>
        )}

      </StyledHeader>
    );
  };

  export default Header
  
import { useRef, useState } from 'react';
import Close from '../../SVG/Close.jsx';
import Hamburger from '../../SVG/Hamburger.jsx';
import { Menu } from "./Menu.jsx";
import { DesktopMenu } from "./DesktopMenu.jsx";
import StyledHeader from "./HeaderStyles.jsx";


export const Header = (props) => {
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
      <StyledHeader>

        <div id='title-box'>
          <div className="profileImage"></div>
          <h2>Gio Katamadze</h2>
        </div>

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
  
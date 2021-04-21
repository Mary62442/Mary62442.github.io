import React, { useContext, useEffect, useState } from "react";
import { HeaderLink, SearchInput, H1 } from "../components";
import styled, { css } from "styled-components";

const Header = ({ white }) => {
  const [menuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    let scrollSize = window.pageYOffset;

    if (scrollSize <= 10) {
      setScrolled(false);
    }

    if (scrollSize > 10) {
      setScrolled(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainContainer>
      <HeaderDesktopContainer scrolled={scrolled}>
        <Logo white /* white={!scrolled} */ />
        {/*  <NavigationContainer>
          <HeaderLink white={false} focused={true} onClick={() => {}}>
            <a>About</a>
          </HeaderLink>
          <HeaderLink white={false} focused={false} onClick={() => {}}>
            <a>Dev and Design</a>
          </HeaderLink>
          <HeaderLink white={false} focused={false} onClick={() => {}}>
            <a>Poetry</a>
          </HeaderLink>
          <HeaderLink white={false} focused={false} onClick={() => {}}>
            <a>Contacts</a>
          </HeaderLink>
        </NavigationContainer> */}
      </HeaderDesktopContainer>
    </MainContainer>
  );
};

const Logo = styled.div`
  background-image: ${(props) =>
    props.white ? 'url("/svg/logo-white.svg")' : 'url("/svg/logo-black.svg")'};
  width: 50px;
  height: 50px;
  margin-left: 20px;
`;

const MainContainer = styled.div`
  width: 100%;
  //position: fixed;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
const HeaderDesktopContainer = styled.header`
  width: 100%;
  transition: 0.1s linear;
  height: 80px;
  display: flex;
  align-items: center;
  /* ${(props) =>
    props.scrolled &&
    css`
      background-color: white;
      box-shadow: ${(props) => props.theme.boxShadow};
    `} */
`;

const HeaderMobileContainer = styled.header`
  width: 100%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const NavigationContainer = styled.nav`
  display: flex;
  padding: 30px 40px 30px 40px;
`;

const RainbowLogoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RainbowLogoHeader = styled.div`
  padding: 20px;
`;

const MobileDropDown = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Header;

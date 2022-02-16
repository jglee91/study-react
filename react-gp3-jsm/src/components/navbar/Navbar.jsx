import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {
  Gpt3Navbar,
  Gpt3NavbarLinks,
  Gpt3NavbarLinksLogo,
  Gpt3NavbarLinksContainer,
  Gpt3NavbarSign,
  Gpt3NavbarMenu,
  Gpt3NavbarMenuContainer,
  Gpt3NavbarMenuContainerLinks,
  Gpt3NavbarMenuContainerLinksSign,
} from './navbar.styles';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Gpt3Navbar>
      <Gpt3NavbarLinks>
        <Gpt3NavbarLinksLogo>
          <img src={logo} alt="logo" />
        </Gpt3NavbarLinksLogo>
        <Gpt3NavbarLinksContainer>
          <Menu />
        </Gpt3NavbarLinksContainer>
      </Gpt3NavbarLinks>
      <Gpt3NavbarSign>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </Gpt3NavbarSign>
      <Gpt3NavbarMenu>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <Gpt3NavbarMenuContainer>
            <Gpt3NavbarMenuContainerLinks>
              <Menu />
              <Gpt3NavbarMenuContainerLinksSign>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </Gpt3NavbarMenuContainerLinksSign>
            </Gpt3NavbarMenuContainerLinks>
          </Gpt3NavbarMenuContainer>
        )}
      </Gpt3NavbarMenu>
    </Gpt3Navbar>
  );
};

export default Navbar;

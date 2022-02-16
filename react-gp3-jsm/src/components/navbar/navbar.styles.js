import styled from 'styled-components';

export const Gpt3Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

export const Gpt3NavbarLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Gpt3NavbarLinksLogo = styled.div`
  margin-right: 2rem;

  img {
    width: 62px;
    height: 16p;x
  }
`;

const paragraphStyle = `
  p {
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }
`;
const buttonStyle = `
  button {
    padding: 1rem 2rem;
    color: #fff;
    background: #FF4820;
    font-family: var(--font-family);
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    border-radius: 5px;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

export const Gpt3NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${paragraphStyle}

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const Gpt3NavbarSign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${paragraphStyle}

  ${buttonStyle}

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const Gpt3NavbarMenu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

export const Gpt3NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

  ${paragraphStyle}
  p {
    margin: 1rem 0;
  }

  ${buttonStyle}

  @media screen and (max-width: 550px) {
    top: 20px;
  }
`;

export const Gpt3NavbarMenuContainerLinks = styled.div``;

export const Gpt3NavbarMenuContainerLinksSign = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;

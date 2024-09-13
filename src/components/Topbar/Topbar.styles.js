import styled from 'styled-components'

const TopbarWrapper = styled.section`
  width: 100%;
  height: 50px;
`

const Mobile = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Hamburger = styled.button`
  width: 48px;
  height: 48px;

  background-color: transparent;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 10;
`

const HamburgerInner = styled.span`
  width: 38px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;

  background-color: ${(props) => (props.isActive ? 'transparent' : props.theme.colors.light)};

  position: relative;

  transition: background-color 0.1s;

  &::before,
  &::after {
    width: 100%;
    height: 3px;

    background-color: ${({ theme }) => theme.colors.light};

    position: absolute;
    top: 0;
    left: 0;

    content: '';

    transition: transform 0.2s;
  }

  &::before {
    transform: ${(props) => (props.isActive ? 'translateY(0) rotate(45deg)' : 'translateY(-10px)')};
  }

  &::after {
    transform: ${(props) => (props.isActive ? 'translateY(0) rotate(-45deg)' : 'translateY(10px)')};
  }
`

const NavBox = styled.aside`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.bgDark};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translateX(100%);

  transition: transform 0.2s;

  &.nav-active {
    transform: translateX(0);
  }
`

const Desktop = styled.div``

export default {
  TopbarWrapper,
  Mobile,
  Hamburger,
  HamburgerInner,
  HamburgerLine,
  NavBox,
  Desktop,
}

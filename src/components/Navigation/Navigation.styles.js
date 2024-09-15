import styled from 'styled-components'

const NavWrapper = styled.nav`
  width: 100%;

  @media screen and (width >= 1280px) {
    height: 100%;

    padding-inline: 50px;
  }

  position: relative;
  z-index: 10;
`

const NavList = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  list-style: none;

  @media screen and (width >= 1280px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`

const NavItem = styled.li`
  width: 200px;
  height: 60px;

  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light};

  @media screen and (width >= 1280px) {
    width: 120px;
    height: 40px;

    font-size: 20px;
    line-height: 28px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  @media screen and (width < 1280px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &:not(.contact):hover {
    color: ${({ theme }) => theme.colors.lightDim};
  }

  &.contact {
    background-color: ${({ theme }) => theme.colors.yellow};

    color: black;

    position: relative;
    z-index: 1;

    transition: background-color 0.2s;
    transition: transform 0.2s;

    &::before {
      content: '';

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      background-color: transparent;

      transition: background-color 0.2s;
      transition: transform 0.2s;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellowDim};

      color: ${({ theme }) => theme.colors.light};

      transform: translate(-3px, 3px);

      &::before {
        transform: translate(6px, -6px);

        border-top: 2px solid ${({ theme }) => theme.colors.light};
        border-right: 2px solid ${({ theme }) => theme.colors.light};
      }
    }
  }
`

export default {
  NavWrapper,
  NavList,
  NavItem,
}

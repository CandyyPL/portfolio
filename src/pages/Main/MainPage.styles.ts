import styled from 'styled-components'

export const MainPageWraper = styled.div`
  width: 100%;

  @media only screen and (min-width: 720px) {
    height: 300vh;
  }

  @media only screen and (min-width: 1280px) {
    height: 360vh;
  }

  background-color: ${({ theme }) => theme.colors.bg};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const TopBar = styled.div`
  width: 100%;
  height: 100px;

  background-color: transparent;
  backdrop-filter: blur(10px);

  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 99999;

  img {
    animation-name: loading;
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;

    height: 100%;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  li {
    width: fit-content;
    height: 75%;

    padding-inline: 15px;
    border-radius: 10px;

    &:not(:last-child) {
      margin-right: 20px;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: 100;
    color: #888;

    cursor: pointer;

    position: relative;

    &::before,
    &::after {
      content: '';

      width: 75%;
      height: 1px;

      position: absolute;

      transition: transform 0.5s;
    }

    &:not(.contact) {
      &::before,
      &::after {
        transform: scaleX(0);
      }
    }

    &::before {
      top: 0;
      left: 0;

      transform-origin: 0%;
    }

    &::after {
      bottom: 0;
      right: 0;

      transform-origin: 100%;
    }

    &:hover::before,
    &:hover::after {
      transform: scaleX(0);
    }

    &.contact:hover {
      color: #ddd;
    }

    &:not(.contact) {
      &:hover::before,
      &:hover::after {
        transform: scaleX(1);
      }
    }

    &:nth-child(odd) {
      &::after {
        background-color: #eee;
      }

      &::before {
        background-color: ${({ theme }) => theme.colors.red};
      }
    }

    &:nth-child(even) {
      &::before {
        background-color: #eee;
      }

      &::after {
        background-color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`

export const TopBarMenu = styled.ul`
  width: 50%;
  height: 100%;

  list-style: none;

  padding: 0;
  margin: 0;

  @media only screen and (max-width: 720px) {
    display: none;
  }

  @media only screen and (min-width: 720px) {
    display: flex;
  }

  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Hamburger = styled.div`
  @media only screen and (max-width: 720px) {
    display: flex;
  }

  @media only screen and (min-width: 720px) {
    display: none;
  }

  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;

  .hamburger-inner {
    width: 75%;
    height: 3px;

    background-color: ${({ theme }) => theme.colors.red};

    border-radius: 10px;

    position: relative;

    &::before,
    &::after {
      content: '';

      position: absolute;

      width: 100%;
      height: 100%;

      background-color: inherit;

      border-radius: 10px;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }

  ul {
    position: absolute;
    top: 0;
    left: 200%;

    z-index: 999999;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    list-style: none;
    padding: 0;

    width: 80vw;
    height: 75vh;

    background-color: #000913;
  }

  ul.active {
    transform: translateX(-100%);
  }
`

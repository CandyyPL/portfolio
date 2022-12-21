import styled from 'styled-components'

export const MainPageWraper = styled.div`
  width: 100%;
  height: 300vh;

  background-color: ${({ theme }) => theme.colors.bg};

  display: flex;
  flex-direction: column;
  justify-content: center;
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
    height: 100%;
  }
`

export const TopBarMenu = styled.ul`
  width: 50%;
  height: 100%;

  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

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

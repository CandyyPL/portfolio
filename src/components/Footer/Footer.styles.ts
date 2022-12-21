import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;

  /* background-color: transparent; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  &::before {
    content: '';

    width: 95%;
    height: 4px;

    background-color: #111;

    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);
  }

  .left,
  .middle,
  .right {
    width: 30%;
    height: 100%;

    padding: 50px;

    display: flex;
    align-items: center;
  }

  .left {
    justify-content: flex-start;

    img {
      height: 40px;
    }
  }

  .middle {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: #eee;
  }

  .right {
    justify-content: flex-end;

    a {
      text-decoration: none;
      color: lightgreen;
      font-family: ${({ theme }) => theme.fonts.code};

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &:hover {
        color: coral;
      }

      position: relative;

      &::after {
        content: '';

        width: 100%;
        height: 1px;

        background-color: coral;

        position: absolute;
        bottom: -10%;
        left: 0;

        transform: scaleX(0);
        transform-origin: 0%;
        transition: transform 0.3s;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
`

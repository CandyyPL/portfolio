import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  &::before {
    content: '';

    width: 95%;
    height: 5px;

    background-color: #000;

    border-radius: 10px;

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
      height: 80px;
      padding: 10px;

      border: 3px solid transparent;
      border-radius: 10px;

      &:hover {
        border: 3px solid white;
      }

      transition: border 0.2s;
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

      transition: color 0.1s;
    }
  }
`

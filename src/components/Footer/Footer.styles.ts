import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;

  @media only screen and (max-width: 720px) {
    height: 80px;
  }

  @media only screen and (min-width: 720px) {
    height: 120px;
  }

  @media only screen and (min-width: 1280px) {
    height: 200px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  margin-top: 5vw;

  &::before {
    content: '';

    @media only screen and (max-width: 720px) {
      width: 85%;
    }

    @media only screen and (min-width: 720px) {
      width: 90%;
    }

    @media only screen and (min-width: 1280px) {
      width: 95%;
    }

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

    @media only screen and (max-width: 720px) {
      padding: 20px;
    }

    @media only screen and (min-width: 720px) {
      padding: 50px;
    }

    display: flex;
    align-items: center;
  }

  .left {
    justify-content: flex-start;

    img {
      @media only screen and (max-width: 720px) {
        height: 60px;
      }

      @media only screen and (min-width: 720px) {
        height: 70px;

        border: 3px solid transparent;
        border-radius: 10px;

        &:hover {
          border: 3px solid white;
        }

        transition: border 0.2s;
      }

      @media only screen and (min-width: 1280px) {
        height: 80px;
      }

      padding: 10px;
    }
  }

  .middle {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 720px) {
      font-size: 14px;
      text-align: center;
    }

    @media only screen and (min-width: 720px) {
      font-size: 16px;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 20px;
    }

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

      @media only screen and (max-width: 720px) {
        font-size: 8px;
        text-align: center;
      }

      @media only screen and (min-width: 720px) {
        font-size: 12px;
        text-align: center;
      }

      @media only screen and (min-width: 1280px) {
        font-size: 20px;
      }

      &:hover {
        color: coral;
      }

      transition: color 0.1s;
    }
  }
`

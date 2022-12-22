import styled from 'styled-components'

export const AboutWrapper = styled.section`
  width: 100%;
  height: 60vh;

  /* border: 5px solid white; */

  margin: 40px 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .title {
    width: 100%;

    @media only screen and (max-width: 720px) {
      font-size: 30px;
      text-align: center;
    }

    @media only screen and (min-width: 720px) {
      font-size: 65px;
      text-align: right;
      padding-right: 80px;
    }

    font-family: ${({ theme }) => theme.fonts.roboto};
    color: #aaa;
    font-weight: bold;

    text-align: right;

    span {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .center {
    width: 100%;
    height: 75%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1280px) {
      flex-direction: column;
    }

    @media only screen and (min-width: 1280px) {
      flex-direction: row;
    }

    .text {
      @media only screen and (max-width: 720px) {
        width: 90%;
      }

      @media only screen and (min-width: 720px) {
        width: 75%;
      }

      @media only screen and (min-width: 1280px) {
        width: 50%;
      }

      height: 100%;

      padding: 2px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      @media only screen and (max-width: 720px) {
        font-size: 14px;
      }

      @media only screen and (min-width: 720px) {
        font-size: 18px;
      }

      font-family: ${({ theme }) => theme.fonts.roboto};
      color: #bbb;

      p {
        margin-bottom: 10px;
      }

      ul {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        @media only screen and (max-width: 720px) {
          padding: 0;

          span {
            margin-right: 30px;
          }
        }

        @media only screen and (min-width: 720px) {
          span {
            margin-right: 50px;
          }
        }

        list-style: none;

        li {
          display: flex;
          flex-direction: row;
          align-items: center;

          @media only screen and (max-width: 720px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .image {
    @media only screen and (max-width: 720px) {
      width: 100%;
      height: 50%;
      margin-bottom: 50px;
    }

    @media only screen and (min-width: 720px) {
      width: 50%;
      height: 100%;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      @media only screen and (max-width: 720px) {
        height: 60%;
      }

      @media only screen and (min-width: 720px) {
        height: 60%;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .small-screen {
      display: flex;
    }

    .large-screen {
      display: none;
    }
  }

  @media only screen and (min-width: 720px) {
    .small-screen {
      display: none;
    }

    .large-screen {
      display: flex;
    }
  }

  .bottom {
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.quote};
    color: #ddd;
  }
`

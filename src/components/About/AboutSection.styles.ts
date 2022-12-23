import styled from 'styled-components'

export const AboutWrapper = styled.section`
  width: 100%;
  height: 65vh;

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
      /* margin-bottom: 40px; */
    }

    @media only screen and (min-width: 720px) {
      font-size: 40px;
      text-align: center;
    }

    @media only screen and (min-width: 1280px) and (max-width: 1600px) {
      font-size: 55px;
      text-align: right;
      padding-right: 80px;
    }

    @media only screen and (min-width: 1600px) {
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
    height: 80%;

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

      @media only screen and (max-width: 720px) {
        font-size: 14px;
      }

      @media only screen and (min-width: 720px) {
        font-size: 16px;
      }

      @media only screen and (max-width: 1280px) {
        align-items: center;
      }

      @media only screen and (min-width: 1280px) {
        align-items: flex-start;
      }

      @media only screen and (min-width: 1280px) {
        font-size: 18px;
      }

      font-family: ${({ theme }) => theme.fonts.roboto};
      color: #bbb;

      p {
        margin-bottom: 10px;

        @media only screen and (max-width: 1280px) {
          text-align: center;
        }
      }

      ul {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 0;

        .medium,
        .large {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        @media only screen and (max-width: 360px) {
          span {
            margin-right: 5px;
          }
        }

        @media only screen and (min-width: 360px) and (max-width: 720px) {
          span {
            margin-right: 30px;
          }

          .medium {
            display: none;
          }

          .large {
            display: flex;
          }
        }

        @media only screen and (min-width: 720xp) and (max-width: 1280px) {
          justify-content: center;

          span {
            margin-right: 50px;
          }

          .medium {
            display: flex;
          }

          .large {
            display: none;
          }
        }

        @media only screen and (min-width: 1280px) {
          justify-content: flex-start;

          .medium {
            display: none;
          }

          .large {
            display: flex;
          }
        }

        list-style: none;

        li {
          display: flex;
          flex-direction: row;
          align-items: center;

          @media only screen and (max-width: 360px) {
            font-size: 10px;

            img {
              height: 30px;
            }
          }

          @media only screen and (max-width: 720px) {
            font-size: 14px;

            img {
              height: 35px;
            }
          }
        }
      }
    }
  }

  .image {
    @media only screen and (max-width: 1280px) {
      display: none;
    }

    @media only screen and (min-width: 1280px) {
      display: flex;
    }

    width: 50%;
    height: 100%;

    justify-content: center;
    align-items: center;

    img {
      height: 300px;
    }
  }

  .bottom {
    @media only screen and (max-width: 720px) {
      font-size: 16px;
      text-align: center;

      margin-top: 50px;
    }

    @media only screen and (min-width: 720px) {
      font-size: 22px;
      text-align: center;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 28px;
    }

    font-family: ${({ theme }) => theme.fonts.quote};
    color: #ddd;
  }
`

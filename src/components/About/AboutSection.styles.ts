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

    padding-right: 80px;

    font-size: 65px;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .text {
      width: 50%;
      height: 100%;

      padding: 2px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      font-size: 18px;
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

        list-style: none;

        span {
          margin-right: 50px;
        }

        li {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }

    .image {
      width: 50%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 60%;
      }
    }
  }

  .bottom {
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.quote};
    color: #ddd;
  }
`

import styled from 'styled-components'

export const ContactWrapper = styled.section`
  width: 100%;
  height: 30vh;

  /* border: 5px solid white; */

  margin: 40px 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 10px;
  }

  .title {
    @media only screen and (max-width: 720px) {
      font-size: 30px;
    }

    @media only screen and (min-width: 720px) {
      font-size: 40px;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 60px;
    }

    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: bold;
    color: #aaa;

    span {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .sub {
    @media only screen and (max-width: 720px) {
      font-size: 14px;
      text-align: center;
    }

    @media only screen and (min-width: 720px) {
      font-size: 20px;
    }
    font-family: ${({ theme }) => theme.fonts.default};
    color: #888;
  }

  .mail {
    @media only screen and (max-width: 720px) {
      font-size: 16px;
    }

    @media only screen and (min-width: 720px) {
      font-size: 24px;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 30px;
    }

    font-family: ${({ theme }) => theme.fonts.code};
    color: #eee;
  }
`

import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    margin: 40px 0 20px 0;
  }

  position: relative;
  z-index: 999;

  span {
    font-family: ${({ theme }) => theme.fonts.roboto};
  }

  .introduce {
    @media only screen and (max-width: 720px) {
      font-size: 14px;
    }

    @media only screen and (min-width: 720px) {
      font-size: 16px;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 20px;
    }

    font-family: ${({ theme }) => theme.fonts.code};
    color: ${({ theme }) => theme.colors.red};
  }

  .name {
    @media only screen and (max-width: 720px) {
      font-size: 50px;
    }

    @media only screen and (min-width: 720px) {
      font-size: 80px;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 100px;
    }

    font-weight: 900;
    color: #666;

    margin: 0;
  }

  .sub {
    @media only screen and (max-width: 720px) {
      font-size: 40px;
    }

    @media only screen and (min-width: 720px) {
      font-size: 60px;
    }

    @media only screen and (min-width: 1280px) {
      font-size: 75px;
    }

    font-weight: 800;
    color: #444;
  }

  .sub-sub {
    color: #bbb;
  }

  .desc {
    font-size: 20px;
    font-weight: 200;
    color: #666;

    margin: 20px 0;
  }
`

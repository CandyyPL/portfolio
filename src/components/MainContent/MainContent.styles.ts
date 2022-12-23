import styled from 'styled-components'

export const MainContentWrapper = styled.div`
  @media only screen and (max-width: 1280px) {
    width: 80%;
  }

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 720px) {
    margin-top: 30vh;
  }

  @media only screen and (min-width: 720px) {
    margin-top: 35vh;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 28vh;
  }

  margin-inline: auto;

  section {
    position: relative;
  }

  .tag {
    @media only screen and (max-width: 720px) {
      display: none;
    }

    @media only screen and (min-width: 720px) {
      position: absolute;
    }

    position: absolute;

    transform: translateX(-40px);
    font-family: ${({ theme }) => theme.fonts.code};
    color: #555;
  }

  .section-tags {
    width: 100%;

    @media only screen and (max-width: 720px) {
      &:not(:last-child) {
        margin-bottom: 200px;
      }
    }

    @media only screen and (min-width: 720px) {
      &:not(:last-child) {
        margin-bottom: 300px;
      }
    }

    @media only screen and (min-width: 1280px) {
      &:not(:last-child) {
        margin-bottom: 40vh;
      }
    }
  }
`

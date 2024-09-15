import styled from 'styled-components'

const HeroWrapper = styled.section`
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (width >= 640px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-top: 100px;
  }
`

const Texts = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3.hero-hello-header {
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.lightDim};

    line-height: 18px;

    @media screen and (width >= 1280px) {
      font-size: 28px;
      line-height: 28px;
    }
  }

  h1.hero-name-header {
    font-size: 80px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    line-height: 80px;

    @media screen and (width >= 1280px) {
      font-size: 125px;
      line-height: 125px;
    }
  }

  h2.hero-details-header {
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    line-height: 40px;

    @media screen and (width >= 1280px) {
      font-size: 80px;
      line-height: 80px;
    }
  }

  .contact-button {
    width: 175px;
    height: 60px;

    @media screen and (width >= 1280px) {
      width: 250px;
      height: 80px;
    }

    background-color: ${({ theme }) => theme.colors.yellow};
    border: none;

    font-size: 18px;
    font-weight: 600;
    color: black;

    @media screen and (width >= 1280px) {
      font-size: 24px;
    }

    line-height: 20px;

    cursor: pointer;

    position: relative;
    z-index: 1;

    transition: background-color 0.2s;
    transition: transform 0.2s;

    &::before {
      content: '';

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      background-color: transparent;

      transition: background-color 0.2s;
      transition: transform 0.2s;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellowDim};

      color: ${({ theme }) => theme.colors.light};

      transform: translate(4px, -4px);

      &::before {
        transform: translate(-8px, 8px);

        border-bottom: 2px solid ${({ theme }) => theme.colors.light};
        border-left: 2px solid ${({ theme }) => theme.colors.light};
      }
    }
  }
`

const Photo = styled.section`
  @media screen and (width >= 640px) {
    max-width: 400px;
  }

  @media screen and (width >= 1280px) {
    max-width: 600px;
  }

  img.hero-photo {
    width: 100%;

    border: 6px solid ${({ theme }) => theme.colors.yellowDim};
    border-radius: 10px;
  }
`

export default {
  HeroWrapper,
  Texts,
  Photo,
}

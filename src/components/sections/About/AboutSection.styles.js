import styled from 'styled-components'

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  h1.about-header {
    width: 100%;

    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;

    @media screen and (width >= 640px) {
      font-size: 38px;
      line-height: 38px;
    }

    @media screen and (width >= 960px) {
      width: 75%;

      font-size: 42px;
      line-height: 42px;

      text-align: right;
    }

    @media screen and (width >= 1280px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
`

const AboutDesc = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media screen and (width >= 960px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`

const Photo = styled.section`
  width: 60%;
  max-width: 325px;
  max-height: 435px;

  @media screen and (width >= 640px) {
    min-width: 325px;
    min-height: 435px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  img.about-photo {
    width: 100%;

    border: 6px solid ${({ theme }) => theme.colors.yellowDim};
    border-radius: 10px;
  }
`

const Texts = styled.section`
  /* max-width: 615px;
  max-height: 275px; */

  width: 100%;

  @media screen and (width >= 960px) {
    max-width: 750px;

    text-align: left;
  }

  p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;

    @media screen and (width >= 960px) {
      text-align: left;
    }

    @media screen and (width >= 1280px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
`

const Techs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;

  @media screen and (width >= 1280px) {
    gap: 40px;
  }

  h1.about-techs-header {
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;

    @media screen and (width >= 640px) {
      font-size: 38px;
      line-height: 38px;
    }

    @media screen and (width >= 960px) {
      font-size: 42px;
      line-height: 42px;
    }

    @media screen and (width >= 1280px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
`

const TechList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (width >= 1280px) {
    gap: 28px;
  }

  .tech {
    width: 82px;
    height: 82px;

    @media screen and (width >= 1280px) {
      width: 120px;
      height: 120px;
    }

    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .icon {
      width: 48px;
      height: 48px;

      @media screen and (width >= 1280px) {
        width: 64px;
        height: 64px;
      }
    }

    span.tech-name {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.light};

      @media screen and (width >= 1280px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
`

export default {
  AboutWrapper,
  AboutDesc,
  Photo,
  Texts,
  Techs,
  TechList,
}

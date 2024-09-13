import styled from 'styled-components'

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h1.about-header {
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;
  }
`

const AboutDesc = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Photo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  img.about-photo {
    width: 60%;

    border: 6px solid ${({ theme }) => theme.colors.yellowDim};
    border-radius: 10px;
  }
`

const Texts = styled.section`
  p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;
  }
`

const Techs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;

  h1.about-techs-header {
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;
  }
`

const TechList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .tech {
    width: 82px;
    height: 82px;

    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .icon {
      width: 48px;
      height: 48px;
    }

    span.tech-name {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.light};
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

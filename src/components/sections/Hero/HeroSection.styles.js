import styled from 'styled-components'

const HeroWrapper = styled.section`
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
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
  }

  h1.hero-name-header {
    font-size: 80px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    line-height: 80px;
  }

  h2.hero-details-header {
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    line-height: 40px;
  }

  .contact-button {
    width: 175px;
    height: 60px;

    background-color: ${({ theme }) => theme.colors.yellow};
    border: none;

    font-size: 18px;
    font-weight: 600;
    color: black;

    line-height: 20px;
  }
`

const Photo = styled.section`
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

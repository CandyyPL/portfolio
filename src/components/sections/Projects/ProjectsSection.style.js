import styled from 'styled-components'

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (width >= 960px) {
    gap: 60px;
  }

  h1.projects-header {
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
    }

    @media screen and (width >= 1280px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
`

const CarouselIndicator = styled.div`
  width: 100%;
  height: 40px;

  margin: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (width >= 960px) {
    display: none;
  }

  div.carousel-indicator-dot {
    width: 12px;
    height: 12px;

    background-color: ${({ theme }) => theme.colors.light};

    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`

const Carousel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;

  .projects-loading-status {
    .error {
      font-size: 32px;
      line-height: 40px;
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.lightDim};
    }

    --color: ${({ theme }) => theme.colors.lightDim};

    .loader {
      width: 60px;
      aspect-ratio: 2;
      --_g: no-repeat radial-gradient(circle closest-side, var(--color) 90%, #0000);
      background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
      background-size: calc(100% / 3) 50%;
      animation: l3 1s infinite linear;
    }

    @keyframes l3 {
      20% {
        background-position: 0% 0%, 50% 50%, 100% 50%;
      }
      40% {
        background-position: 0% 100%, 50% 0%, 100% 50%;
      }
      60% {
        background-position: 0% 50%, 50% 100%, 100% 0%;
      }
      80% {
        background-position: 0% 50%, 50% 50%, 100% 100%;
      }
    }
  }
`

const GithubLink = styled.a`
  width: 200px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;

  margin: 20px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  color: black;

  text-decoration: none;

  cursor: pointer;

  .github-icon {
    width: 32px;
    height: 32px;
  }

  position: relative;

  transition: background-color 0.2s;
  transition: transform 0.2s;

  &::before {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: transparent;

    transition: background-color 0.2s;
    transition: transform 0.2s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDim};

    color: ${({ theme }) => theme.colors.light};

    transform: translate(3px, 3px);

    &::before {
      transform: translate(-6px, -6px);

      border-top: 2px solid ${({ theme }) => theme.colors.light};
      border-left: 2px solid ${({ theme }) => theme.colors.light};
    }
  }
`

export default {
  ProjectsWrapper,
  CarouselIndicator,
  Carousel,
  GithubLink,
}

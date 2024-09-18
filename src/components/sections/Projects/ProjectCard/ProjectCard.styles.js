import styled from 'styled-components'

const CardWrapper = styled.article`
  min-width: 280px;
  max-width: 400px;

  min-height: 450px;
  max-height: 650px;

  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* scroll-snap-align: start; */

  /* text-decoration: none;

  cursor: pointer;

  position: relative; */

  /* &::before {
    content: '';

    width: 99%;
    height: 99%;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: -1;

    background-color: transparent;

    border-top: 2px solid ${({ theme }) => theme.colors.light};
    border-right: 2px solid ${({ theme }) => theme.colors.light};

    // border-top-right-radius: 10px;

    transition: transform 0.2s;
  } */

  /* transition: all 0.2s;

  &:hover {
    &::before {
      transform: translate(-48%, -52%);
    }

    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0px 0px 25px black;
  } */
`

const Image = styled.section`
  width: 100%;

  img.project-thumbnail {
    width: 100%;
    height: 100%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const ProjectDetails = styled.section`
  width: 100%;
  min-height: 270px;

  padding-inline: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`

const ProjectDesc = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`

const Header = styled.header`
  margin-top: 10px;

  h1.project-title {
    font-size: 22px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: left;
  }
`

const Summary = styled.summary`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightDim};

  @media screen and (width >= 640px) {
    font-size: 20px;
    line-height: 28px;
  }
`

const Techs = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  .icon {
    width: 32px;
    height: 32px;

    fill: white;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`

const Link = styled.a`
  width: 125px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.yellow};

  text-decoration: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: black;

  cursor: pointer;

  position: relative;
  z-index: 1;

  transition: background-color 0.2s;
  transition: transform 0.2s;

  .project-link-icon {
    width: 32px;
    height: 32px;
  }

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

    transform: translate(-4px, 4px);

    &::before {
      transform: translate(8px, -8px);

      border-top: 2px solid ${({ theme }) => theme.colors.light};
      border-right: 2px solid ${({ theme }) => theme.colors.light};
    }
  }
`

export default {
  CardWrapper,
  Image,
  ProjectDetails,
  ProjectDesc,
  Header,
  Summary,
  Techs,
  Link,
}

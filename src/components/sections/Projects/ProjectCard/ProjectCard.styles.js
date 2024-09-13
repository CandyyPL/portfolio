import styled from 'styled-components'

const CardWrapper = styled.article`
  width: 320px;
  height: 450px;

  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 10px;
`

const Image = styled.section`
  width: 100%;
  height: 180px;

  img.project-thumbnail {
    border-radius: 10px 10px 0 0;
  }
`

const ProjectDetails = styled.section`
  width: 100%;
  height: 270px;

  padding-inline: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
    font-size: 24px;
    line-height: 30px;
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
`

const Techs = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 32px;
    height: 32px;

    fill: white;

    &:not(:last-child) {
      margin-right: 20px;
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
}

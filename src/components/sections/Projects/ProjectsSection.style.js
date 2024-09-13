import styled from 'styled-components'

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1.projects-header {
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;
  }
`

const CarouselIndicator = styled.div`
  width: 100%;
  height: 40px;

  margin: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

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

const Carousel = styled.section``

export default {
  ProjectsWrapper,
  CarouselIndicator,
  Carousel,
}

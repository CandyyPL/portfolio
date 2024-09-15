import styled from 'styled-components'

const ContentWrapper = styled.main`
  width: min(90%, 1600px);

  padding: 25px 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .sections {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 100px;

    section {
      width: 100%;
    }

    @media screen and (width >= 640px) {
      gap: 200px;
    }

    @media screen and (width >= 1280px) {
      gap: 350px;
    }
  }
`

export default {
  ContentWrapper,
}

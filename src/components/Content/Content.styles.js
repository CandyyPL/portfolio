import styled from 'styled-components'

const ContentWrapper = styled.main`
  width: 90%;

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
  }
`

export default {
  ContentWrapper,
}

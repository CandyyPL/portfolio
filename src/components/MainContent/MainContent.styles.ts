import styled from 'styled-components'

export const MainContentWrapper = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 25vh;

  section {
    position: relative;
  }

  .tag {
    position: absolute;
    transform: translateX(-40px);
    font-family: ${({ theme }) => theme.fonts.code};
    color: #555;
  }

  .section-tags {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 400px;
    }
  }
`

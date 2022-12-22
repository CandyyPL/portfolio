import styled from 'styled-components'

export const ContactWrapper = styled.section`
  width: 100%;
  height: 40vh;

  /* border: 5px solid white; */

  margin: 40px 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 10px;
  }

  .title {
    font-size: 60px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: bold;
    color: #aaa;

    span {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .sub {
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: #888;
  }

  .mail {
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.code};
    color: #eee;
  }
`

import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 0 20px 0;

  position: relative;
  z-index: 999;

  span {
    font-family: ${({ theme }) => theme.fonts.roboto};
  }

  .introduce {
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.code};
    color: ${({ theme }) => theme.colors.red};
  }

  .name {
    font-size: 100px;
    font-weight: 900;
    color: #666;

    margin: 0;
  }

  .sub {
    font-size: 75px;
    font-weight: 800;
    color: #444;
  }

  .sub-sub {
    color: #bbb;
  }

  .desc {
    font-size: 20px;
    font-weight: 200;
    color: #666;

    margin: 20px 0;
  }
`

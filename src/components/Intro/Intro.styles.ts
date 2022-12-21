import styled from 'styled-components'

export const IntroWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #222;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 9999999;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    animation-name: loading;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;

    height: 200px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  transition: opacity 2s;

  &.closing {
    opacity: 0;
  }
`

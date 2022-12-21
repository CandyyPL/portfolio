import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    content: '';

    width: 95%;
    height: 4px;

    background-color: #111;

    position: absolute;
    top: 0;
  }
`

import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.bgDark};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.yellow};
`

export default {
  FooterWrapper,
}

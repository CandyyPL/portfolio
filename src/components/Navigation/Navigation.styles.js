import styled from 'styled-components'

const NavWrapper = styled.nav`
  width: 100%;

  position: relative;
  z-index: 10;
`

const NavList = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
`

const NavItem = styled.li`
  width: 200px;
  height: 60px;

  font-size: 28px;
  color: ${({ theme }) => theme.colors.light};

  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &.contact {
    border: 4px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 10px;
  }
`

export default {
  NavWrapper,
  NavList,
  NavItem,
}

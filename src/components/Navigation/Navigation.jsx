import Style from './Navigation.styles.js'

const Navigation = () => {
  return (
    <Style.NavWrapper>
      <Style.NavList>
        <Style.NavItem>witaj</Style.NavItem>
        <Style.NavItem>projekty</Style.NavItem>
        <Style.NavItem>o mnie</Style.NavItem>
        <Style.NavItem className='contact'>kontakt</Style.NavItem>
      </Style.NavList>
    </Style.NavWrapper>
  )
}

export default Navigation

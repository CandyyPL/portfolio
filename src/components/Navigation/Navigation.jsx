import './Navigation.styles.scss'

const Navigation = () => {
  return (
    <nav className='nav-wrapper'>
      <ul className='nav-list'>
        <li className='nav-item'>witaj</li>
        <li className='nav-item'>projekty</li>
        <li className='nav-item'>o mnie</li>
        <li className='nav-item contact'>kontakt</li>
      </ul>
    </nav>
  )
}

export default Navigation

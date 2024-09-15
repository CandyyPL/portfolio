import profileImg from '@/assets/img/profile.png'
import Style from './HeroSection.styles.js'

const HeroSection = (props) => {
  const scrollToContact = () => {
    const ref = props.contactRef

    if (ref != undefined) {
      ref.current.scrollIntoView({ behaviour: 'smooth', block: 'center' })
    }
  }

  return (
    <Style.HeroWrapper>
      <Style.Texts>
        <h3 className='hero-hello-header'>Cześć, jestem</h3>
        <h1 className='hero-name-header'>Marcel.</h1>
        <h2 className='hero-details-header'>
          Tworzę{' '}
          <span className='text-accent'>
            strony <br /> internetowe
          </span>
          .
        </h2>
        <button className='contact-button' onClick={() => scrollToContact()}>
          NAPISZ DO MNIE
        </button>
      </Style.Texts>
      <Style.Photo>
        <img className='hero-photo' src={profileImg} alt='Zdjęcie profilowe' />
      </Style.Photo>
    </Style.HeroWrapper>
  )
}

export default HeroSection

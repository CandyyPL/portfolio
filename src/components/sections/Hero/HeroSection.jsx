import profileImg from '@/assets/img/profile.png'
import Style from './HeroSection.styles.js'

const HeroSection = () => {
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
        <button className='contact-button'>NAPISZ DO MNIE</button>
      </Style.Texts>
      <Style.Photo>
        <img className='hero-photo' src={profileImg} alt='Zdjęcie profilowe' />
      </Style.Photo>
    </Style.HeroWrapper>
  )
}

export default HeroSection

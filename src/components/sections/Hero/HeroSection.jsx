import profileImg from '@/assets/img/profile.png'
import Style from './HeroSection.styles.js'
import Reveal from '@/components/Reveal/Reveal.jsx'

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
        <Reveal delay={0.3}>
          <h3 className='hero-hello-header'>Cześć, jestem</h3>
        </Reveal>
        <Reveal delay={0.5}>
          <h1 className='hero-name-header'>Marcel.</h1>
        </Reveal>
        <Reveal delay={0.7}>
          <h2 className='hero-details-header'>
            Tworzę{' '}
            <span className='text-accent'>
              strony <br /> internetowe
            </span>
            .
          </h2>
        </Reveal>
        <Reveal delay={0.9}>
          <button className='contact-button' onClick={() => scrollToContact()}>
            NAPISZ DO MNIE
          </button>
        </Reveal>
      </Style.Texts>
      <Reveal delay={0.3}>
        <Style.Photo>
          <img className='hero-photo' src={profileImg} alt='Zdjęcie profilowe' />
        </Style.Photo>
      </Reveal>
    </Style.HeroWrapper>
  )
}

export default HeroSection

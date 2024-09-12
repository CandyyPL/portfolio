import profileImg from '@/assets/img/profile.png'
import './HeroSection.styles.scss'

const HeroSection = () => {
  return (
    <section className='hero-wrapper'>
      <header className='texts'>
        <h3>Cześć, jestem</h3>
        <h1>Marcel.</h1>
        <h2>
          Tworzę{' '}
          <span className='text-accent'>
            strony <br /> internetowe
          </span>
          .
        </h2>
        <button className='contact-button'>NAPISZ DO MNIE</button>
      </header>
      <section className='photo'>
        <img src={profileImg} alt='Zdjęcie profilowe' />
      </section>
    </section>
  )
}

export default HeroSection

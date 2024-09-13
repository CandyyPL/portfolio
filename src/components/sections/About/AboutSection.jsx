import profileImg from '@/assets/img/profile2.png'
import Style from './AboutSection.styles.js'
import IconList from '@/helpers/icons.js'

const AboutSection = () => {
  return (
    <Style.AboutWrapper>
      <h1 className='about-header'>
        Kilka słów <span className='text-accent'>o mnie</span>.
      </h1>
      <Style.AboutDesc>
        <Style.Photo>
          <img className='about-photo' src={profileImg} alt='Zdjęcie profilowe' />
        </Style.Photo>
        <Style.Texts>
          <p className='quote'>
            “Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia w swoim życiu.” ~
            Konfucjusz
          </p>
          <br />
          <p className='desc'>
            Wierzę w te słowa, a ponieważ programowanie jest moją pasją od wielu lat, postanowiłem
            że zajmę się tym zawodowo. Pisanie kodu z pasją jest czymś niesamowitym, czymś, co po
            odpowiednim czasie zamienia się w styl życia.
          </p>
        </Style.Texts>
      </Style.AboutDesc>
      <Style.Techs>
        <h1 className='about-techs-header'>
          <span className='text-accent'>Technologie</span> z którymi pracuję
        </h1>
        <Style.TechList>
          {IconList.map((i) => (
            <figure className='tech' key={i.name}>
              <i.icon className='icon' />
              <span className='tech-name'>{i.displayName}</span>
            </figure>
          ))}
        </Style.TechList>
      </Style.Techs>
    </Style.AboutWrapper>
  )
}

export default AboutSection

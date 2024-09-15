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
            ”Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia w swoim życiu”. ~
            Konfucjusz
          </p>
          <br />
          <p className='desc'>
            W pełni zgadzam się z tymi słowami. Programowanie to moja pasja, którą rozwijam od wielu
            lat, dlatego postanowiłem uczynić z tego swoją ścieżkę zawodową. Kodowanie to nie tylko
            moje hobby, ale również styl życia, który daje mi niesamowitą satysfakcję i nieustannie
            inspiruje do rozwoju, a w niedługiej przyszłości stanie się również moją pracą.
          </p>
        </Style.Texts>
      </Style.AboutDesc>
      <Style.Techs>
        <h1 className='about-techs-header'>
          <span className='text-accent'>Technologie</span> z którymi pracuję.
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

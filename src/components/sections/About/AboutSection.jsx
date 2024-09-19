import profileImg from '@/assets/img/profile2.png'
import Style from './AboutSection.styles.js'
import IconList from '@/helpers/icons.js'
import React from 'react'
import Reveal from '@/components/Reveal/Reveal.jsx'

const AboutSection = React.forwardRef((_, ref) => {
  return (
    <Style.AboutWrapper ref={ref}>
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
          {IconList.map((elm, i) => (
            <Reveal length={30} delay={0.5 + i * 0.15} key={elm.name}>
              <figure className='tech'>
                <elm.icon className='icon' />
                <span className='tech-name'>{elm.displayName}</span>
              </figure>
            </Reveal>
          ))}
        </Style.TechList>
      </Style.Techs>
    </Style.AboutWrapper>
  )
})

export default AboutSection

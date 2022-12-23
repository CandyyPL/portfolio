import { FC } from 'react'
import { AboutWrapper } from '@/components/About/AboutSection.styles'
import programmerImg from '@/assets/programmer.png'
import arrowImg from '@/assets/arrow_right.png'

const AboutSection: FC = () => {
  return (
    <AboutWrapper>
      <div className='title'>
        That's <span>who I am</span>.
      </div>
      <div className='image small-screen'>
        <img src={programmerImg} alt='programmer' />
      </div>
      <div className='center'>
        <div className='text'>
          <p>Hello! My name is Marcel and I am a front-end web developer from Poland.</p>
          <p>
            Programming always was my passion, especially web dev. I started making simple websites
            back in 2018. Now, I focus on coding websites as a freelancer. I am open for any job
            offers.
          </p>
          <p>As for the technologies, I prefer MERN stack.</p>
          <ul>
            <span>
              <li>
                <img src={arrowImg} alt='arrow' />
                JavaScript
              </li>
              <li>
                <img src={arrowImg} alt='arrow' />
                React
              </li>
              <li>
                <img src={arrowImg} alt='arrow' />
                MongoDB
              </li>
            </span>
            <span>
              <li>
                <img src={arrowImg} alt='arrow' />
                Typescript
              </li>
              <li>
                <img src={arrowImg} alt='arrow' />
                SCSS
              </li>
              <li>
                <img src={arrowImg} alt='arrow' />
                DatoCMS
              </li>
            </span>
          </ul>
        </div>
        <div className='image large-screen'>
          <img src={programmerImg} alt='programmer' />
        </div>
      </div>
      <div className='bottom'>
        <span>Code is like humor. When you have to explain it, it's bad. ~ Cory House</span>
      </div>
    </AboutWrapper>
  )
}

export default AboutSection

import { WelcomeWrapper } from '@/components/Welcome/WelcomeSection.styles'
import { FC } from 'react'

const WelcomeSection: FC = () => {
  return (
    <WelcomeWrapper>
      <span className='introduce'>Hi, my name is</span>
      <span className='name'>Marcel Betański.</span>
      <span className='sub'>
        I <span className='sub-sub'>make websites</span> with passion.
      </span>
      <span className='desc'>
        I'm a front-end web developer from Poland. <br /> I focus on coding (and occasionally
        designing) websites for my clients.
      </span>
    </WelcomeWrapper>
  )
}

export default WelcomeSection

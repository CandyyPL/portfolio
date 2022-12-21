import { FC } from 'react'
import { MainContentWrapper } from '@/components/MainContent/MainContent.styles'
import WelcomeSection from '@/components/Welcome/WelcomeSection'

const MainContent: FC = () => {
  return (
    <MainContentWrapper>
      <div>
        <span className='tag'>&lt;hello&gt;</span>
        <WelcomeSection />
        <span className='tag'>&lt;hello/&gt;</span>
      </div>
    </MainContentWrapper>
  )
}

export default MainContent

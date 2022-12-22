import { FC, useRef } from 'react'
import { FooterWrapper } from '@/components/Footer/Footer.styles'
import githubIconImg from '@/assets/github.png'

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <div className='left'>
        <a href='https://github.com/CandyyPL' target='_blank'>
          <img src={githubIconImg} alt='github' />
        </a>
      </div>
      <div className='middle'>candyypl.github.io &copy; 2022</div>
      <div className='right'>
        <span>
          <a href='https://github.com/CandyyPL/portfolio' target='_blank'>
            Designed &amp; Built by Marcel Betański
          </a>
        </span>
      </div>
    </FooterWrapper>
  )
}

export default Footer

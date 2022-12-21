import { FC, useRef } from 'react'
import { FooterWrapper } from '@/components/Footer/Footer.styles'
import githubIconImg from '@/assets/github.png'
import githubIconLightImg from '@/assets/github-light.png'

const Footer: FC = () => {
  const ghIconRef = useRef<HTMLImageElement>(null)

  ghIconRef.current?.addEventListener('mouseenter', () => {
    ghIconRef.current?.setAttribute('src', githubIconLightImg)
  })

  ghIconRef.current?.addEventListener('mouseleave', () => {
    ghIconRef.current?.setAttribute('src', githubIconImg)
  })

  return (
    <FooterWrapper>
      <div className='left'>
        <a href='https://github.com/CandyyPL' target='_blank'>
          <img src={githubIconImg} alt='github' ref={ghIconRef} />
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

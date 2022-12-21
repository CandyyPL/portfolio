import { FC, useEffect, useRef } from 'react'
import lollipopImg from '@/assets/lollipop.png'
import { IntroWrapper } from '@/components/Intro/Intro.styles'

const Intro: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setTimeout(() => {
      imgRef.current?.classList.add('closing')
    }, 2000)
  }, [])

  return (
    <IntroWrapper>
      <img src={lollipopImg} alt='lollipop' ref={imgRef} />
    </IntroWrapper>
  )
}

export default Intro

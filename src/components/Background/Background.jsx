import { MoveDirection, OutMode } from '@tsparticles/engine'
import { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'
import Style from './Background.styles.js'

const Background = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const options = useMemo(
    () => ({
      background: {
        color: '#12130f',
      },
      particles: {
        number: {
          value: 100,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 0.1,
          straight: false,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
          value: { min: 0.1, max: 0.4 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
    }),
    []
  )

  if (init) {
    return (
      <Style.TsParticles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />
    )
  }

  return <></>
}

export default Background

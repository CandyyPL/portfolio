import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#12130f',
        },
      },
      fpsLimit: 30,
      particles: {
        color: {
          value: '#ffffff',
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 0.05,
          straight: false,
        },
        number: {
          value: 100,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
          value: { min: 0.2, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id='tsparticles'
        options={options}
        className='relative -z-10'
      />
    );
  }

  return <></>;
}

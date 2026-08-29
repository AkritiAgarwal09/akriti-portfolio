import { useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useReducedMotion } from 'framer-motion'

const initParticles = async (engine) => {
  await loadSlim(engine)
}

function buildOptions(theme, reduceMotion) {
  const isLight = theme === 'light'

  return {
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: reduceMotion ? 28 : 72,
        density: { enable: true, width: 1200, height: 900 },
      },
      color: {
        value: isLight
          ? ['#3d8b7a', '#b8862e', '#3a9aad']
          : ['#5dab9a', '#d4a054', '#6ec4d4'],
      },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.15, max: isLight ? 0.45 : 0.55 },
        animation: {
          enable: !reduceMotion,
          speed: 0.35,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 2.8 },
        animation: {
          enable: !reduceMotion,
          speed: 1.2,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 140,
        color: isLight ? '#3d8b7a' : '#5dab9a',
        opacity: isLight ? 0.14 : 0.18,
        width: 1,
      },
      move: {
        enable: !reduceMotion,
        speed: 0.55,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: !reduceMotion,
          mode: 'grab',
        },
        onClick: {
          enable: !reduceMotion,
          mode: 'push',
        },
        resize: { enable: true },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: isLight ? 0.28 : 0.35,
          },
        },
        push: {
          quantity: 2,
        },
      },
    },
    background: {
      color: 'transparent',
    },
  }
}

export default function ParticleBackground({ theme }) {
  const reduceMotion = useReducedMotion()
  const options = useMemo(
    () => buildOptions(theme, reduceMotion),
    [theme, reduceMotion],
  )

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="portfolio-particles"
        className="particle-canvas"
        options={options}
      />
    </ParticlesProvider>
  )
}

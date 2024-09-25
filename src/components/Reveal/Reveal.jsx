import { motion, useAnimation, useInView } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery.js'
import { useEffect, useRef, useState } from 'react'

const Reveal = ({
  children,
  dirFrom = 'top',
  length = 60,
  duration = 0.75,
  delay = 0.25,
  parentWidth = 'fit-content',
  mobile = true,
}) => {
  const [dir, setDir] = useState({})
  const [loading, setLoading] = useState(true)

  const isMobileWidth = useMediaQuery('width < 1280px')

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const controls = useAnimation()

  useEffect(() => {
    const xZero = { x: 0 }
    const yZero = { y: 0 }

    if (dirFrom == 'top') setDir({ start: { y: -length }, end: yZero })
    if (dirFrom == 'right') setDir({ start: { x: length }, end: xZero })
    if (dirFrom == 'bottom') setDir({ start: { y: length }, end: yZero })
    if (dirFrom == 'left') setDir({ start: { x: -length }, end: xZero })

    setLoading(false)
  }, [dirFrom, length])

  useEffect(() => {
    if (!loading && controls && inView) {
      controls.start('visible')
    }
  }, [loading, controls, inView])

  return (
    <>
      {(isMobileWidth && mobile) || !isMobileWidth ? (
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: parentWidth,
            // border: '1px solid red',
          }}>
          {!loading && (
            <motion.div
              variants={{
                hidden: { opacity: 0, ...dir.start },
                visible: { opacity: 1, ...dir.end },
              }}
              initial='hidden'
              animate={controls}
              transition={{ duration, delay }}>
              {children}
            </motion.div>
          )}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Reveal

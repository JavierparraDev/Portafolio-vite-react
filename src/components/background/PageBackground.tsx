import { motion, MotionConfig } from 'framer-motion'
import NeuralBackground from './NeuralBackground'

const orbTransition = (duration: number) => ({
  duration,
  repeat: Infinity,
  ease: 'easeInOut' as const
})

const PageBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Engineering grid */}
      <div className="absolute inset-0 bg-engineering-grid" />

      {/* Neural network */}
      <NeuralBackground />

      {/* Aurora glows */}
      <MotionConfig reducedMotion="user">
        <motion.div
          className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/25"
          animate={{
            x: ['0%', '18%', '6%', '0%'],
            y: ['0%', '12%', '22%', '0%'],
            scale: [1, 1.2, 0.92, 1],
            opacity: [1, 0.85, 1, 1]
          }}
          transition={orbTransition(26)}
        />
        <motion.div
          className="absolute top-1/3 -right-44 h-[40rem] w-[40rem] rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/25"
          animate={{
            x: ['0%', '-14%', '4%', '0%'],
            y: ['0%', '-10%', '14%', '0%'],
            scale: [1, 0.9, 1.18, 1],
            opacity: [1, 1, 0.8, 1]
          }}
          transition={orbTransition(30)}
        />
        <motion.div
          className="absolute bottom-[-15%] left-1/4 h-[36rem] w-[36rem] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20"
          animate={{
            x: ['0%', '12%', '-8%', '0%'],
            y: ['0%', '-12%', '-4%', '0%'],
            scale: [1, 1.15, 1, 1],
            opacity: [0.9, 1, 1, 0.9]
          }}
          transition={orbTransition(34)}
        />
      </MotionConfig>

      {/* Grain */}
      <div className="absolute inset-0 bg-noise" />
    </div>
  )
}

export default PageBackground

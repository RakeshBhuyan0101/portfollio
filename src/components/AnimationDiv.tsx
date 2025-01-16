import { motion } from "motion/react"
import { ReactNode } from "react"

interface AnimatedDivProps {
  children?: ReactNode
  style?: React.CSSProperties
}

export function AnimatedDiv({ children, style }: AnimatedDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        scale: { 
          type: "spring", 
          damping: 5,
          stiffness: 40,
          restDelta: 0.001
        },
      }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
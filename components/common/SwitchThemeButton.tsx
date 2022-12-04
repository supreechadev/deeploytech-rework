import { FC } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence, Variants } from 'framer-motion'

import Icon from '@components/common/Icon'

interface SwitchThemeButtonProps {
  className?: string
}

const swithVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
}

const SwitchThemeButton: FC<SwitchThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        variants={swithVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        key={theme}
        className='hover:brightness-125'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <span className={`flex ${className}`}>
          <Icon size={20} name={theme === 'dark' ? 'moon' : 'sun'} />
        </span>
      </motion.button>
    </AnimatePresence>
  )
}

SwitchThemeButton.defaultProps = {
  className: 'text-white',
}

export default SwitchThemeButton

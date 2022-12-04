import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence, Variants } from 'framer-motion'

import TH_FLAG from '@assets/flags/th.png'
import US_FLAG from '@assets/flags/us.png'

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

const SwitchLocaleButton: FC = () => {
  const { locale } = useRouter()

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        variants={swithVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        key={locale}
        className='hover:brightness-125'
      >
        <Link href='/' locale={locale === 'en' ? 'th' : 'en'}>
          <Image
            src={locale === 'en' ? US_FLAG : TH_FLAG}
            alt={locale === 'en' ? 'us flag' : 'th flag'}
            width={20}
            height={20}
          />
        </Link>
      </motion.span>
    </AnimatePresence>
  )
}

export default SwitchLocaleButton

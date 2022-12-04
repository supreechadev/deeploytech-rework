import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { motion, animate } from 'framer-motion'

import useIntersectionObserver from '@hooks/useIntersectionObserver'

interface RatingProps {
  value: number
  afterValue: string | null
  description: string
}

const Rating: FC<RatingProps> = ({ value, afterValue, description }) => {
  const ref = useRef<HTMLLIElement | null>(null)
  const [isAnimated, setAnimated] = useState<boolean>(false)
  const [valueText, setValueText] = useState<string>('0')
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible && !isAnimated) {
      setAnimated(true)
      animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate(value) {
          setValueText(afterValue ? `${value.toFixed(0)}${afterValue}` : `${value.toFixed(1)}`)
        },
      })
    }
  }, [isVisible])

  return (
    <motion.li
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className='flex flex-col items-center space-y-1 text-center font-prompt text-white lg:space-y-2'
    >
      <span className='text-3xl font-medium lg:text-5xl'>{valueText}</span>
      <span className='max-w-[164px] text-sm'>{description}</span>
    </motion.li>
  )
}
const AboutUs: FC = () => {
  const { t } = useTranslation('home')

  const RATING_LIST = useMemo(
    (): Array<RatingProps> => [
      {
        value: 100,
        afterValue: '%',
        description: t('about-us__satisfication-level'),
      },
      {
        value: 5,
        afterValue: null,
        description: t('about-us__rating'),
      },
      {
        value: 100,
        afterValue: '%',
        description: t('about-us__growth-rate'),
      },
      {
        value: 130,
        afterValue: '+',
        description: t('about-us__doing-projects'),
      },
    ],
    [],
  )

  return (
    <section id='about-us' className='pt-10 lg:pt-20'>
      <div className='container flex max-w-7xl flex-col items-center text-center'>
        <h2 className='mb-4 text-sm text-primary'>{t('about-us__title')}</h2>
        <p className='mb-4 font-prompt text-2xl font-medium dark:text-white lg:text-4xl'>
          {t('about-us__subtitle1')}
          <strong className='font-medium text-primary'>{t('about-us__subtitle2')}</strong>
        </p>
        <p className='mb-6 text-slate-600  dark:text-white sm:w-3/4 lg:mb-8 lg:w-1/2'>
          {t('about-us__content')}
        </p>
        <ul className='grid w-full grid-cols-2 gap-12 rounded-2xl bg-primary p-8 lg:grid-cols-4 '>
          {RATING_LIST.map((e, i) => (
            <Rating {...e} key={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutUs

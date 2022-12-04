import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import Headline from '@components/common/Headline'
import Icon, { IconName } from '@components/common/Icon'

interface SkillProps {
  icon: IconName
  title: string
  content: string
}

const Skill: FC<SkillProps> = ({ icon, title, content }) => (
  <div className='text-center lg:text-left'>
    <span className='text-primary'>
      <Icon name={icon} size={56} />
    </span>
    <h3 className='mt-6 mb-2 text-xl font-medium dark:text-white lg:text-2xl'>{title}</h3>
    <p className='mx-auto max-w-lg text-slate-600 dark:text-white'>{content}</p>
  </div>
)

const SoftSkills: FC = () => {
  const { t } = useTranslation('home')

  const SKILL_LIST: Array<SkillProps> = [
    {
      icon: 'hand-service',
      title: t('soft-skill__service__title'),
      content: t('soft-skill__service__content'),
    },
    {
      icon: 'thumb-up',
      title: t('soft-skill__quality__title'),
      content: t('soft-skill__quality__content'),
    },
    {
      icon: 'bright',
      title: t('soft-skill__design__title'),
      content: t('soft-skill__design__content'),
    },
  ]

  return (
    <section id='soft-skills' className='pt-10 pb-10 lg:pt-20 lg:pb-20'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
        viewport={{ once: true }}
        className='container max-w-7xl'
      >
        <Headline>{t('soft-skill__title')}</Headline>
        <p className='whitespace-pre-line font-prompt text-2xl font-medium dark:text-white lg:text-3xl'>
          {t('soft-skill__content')}
        </p>
        <div className='mt-10 grid gap-16 lg:mt-20 lg:grid-cols-3'>
          {SKILL_LIST.map((e) => (
            <Skill {...e} key={e.title} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SoftSkills

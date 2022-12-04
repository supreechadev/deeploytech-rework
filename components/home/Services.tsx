import { FC, useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import Headline from '@components/common/Headline'
import Icon, { IconName } from '@components/common/Icon'

interface ServiceCardProps {
  icon: IconName
  title: string
  content: string
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, content }) => (
  <div className='flex space-x-8'>
    <span className='flex-shrink-0 dark:text-white'>
      <Icon name={icon} size={48} />
    </span>
    <div className='flex flex-col'>
      <h3 className='text-lg font-medium dark:text-white'>{title}</h3>
      <p className='text-slate-600 dark:text-white'>{content}</p>
    </div>
  </div>
)

const Services: FC = () => {
  const { t } = useTranslation('home')

  const SERVICE_LIST = useMemo(
    (): Array<ServiceCardProps> => [
      {
        icon: 'ux',
        title: t('service__uxui-design__title'),
        content: t('service__uxui-design__content'),
      },
      {
        icon: 'shiny-star',
        title: t('service__identity__title'),
        content: t('service__identity__content'),
      },
      {
        icon: 'mornitor',
        title: t('service__website__title'),
        content: t('service__website__content'),
      },
      {
        icon: 'mobile',
        title: t('service__app__title'),
        content: t('service__app__content'),
      },
      {
        icon: 'magnifying-chart',
        title: t('service__seo__title'),
        content: t('service__seo__content'),
      },
      {
        icon: 'metophone',
        title: t('service__marketing__title'),
        content: t('service__marketing__content'),
      },
      {
        icon: 'research',
        title: t('service__analysis__title'),
        content: t('service__analysis__content'),
      },
      {
        icon: 'mornitor-setting',
        title: t('service__consult__title'),
        content: t('service__consult__content'),
      },
      {
        icon: 'hand-clasp',
        title: t('service__outsource__title'),
        content: t('service__outsource__content'),
      },
      {
        icon: 'browser-setting',
        title: t('service__line__title'),
        content: t('service__line__content'),
      },
    ],
    [],
  )

  return (
    <section id='our-services' className='py-10 lg:py-20'>
      <div className='container max-w-7xl'>
        <Headline>{t('service__title')}</Headline>
        <p className='mb-8 font-prompt text-2xl font-medium dark:text-white lg:mb-4 lg:text-4xl'>
          {t('service__subtitle1')}
          <strong className='font-medium  text-primary'>{t('service__subtitle2')}</strong>
        </p>
        <p className='mb-12 text-slate-600 dark:text-white'>{t('service__content')}</p>
        <div className='grid gap-16 lg:grid-cols-2'>
          {SERVICE_LIST.map((e) => (
            <ServiceCard {...e} key={e.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

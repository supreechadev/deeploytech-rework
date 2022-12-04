import { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Icon, { IconName } from '@components/common/Icon'

const LOGO_LIST: Array<IconName> = [
  'react',
  'nextjs',
  'typescript',
  'golang',
  'flutter',
  'swift',
  'kotlin',
]

const Integration: FC = () => {
  const { t } = useTranslation('home')

  return (
    <section id='integration' className='bg-primary py-16'>
      <div className='container flex max-w-7xl flex-col justify-between gap-8 lg:flex-row'>
        <div className='flex-shrink-0'>
          <h2 className='mb-2 text-center text-white lg:text-left'>{t('integration__title')}</h2>
          <p className='text-center text-3xl font-medium text-white lg:text-left'>
            {t('integration__content')}
          </p>
        </div>
        <ul className='flex flex-grow flex-wrap justify-center'>
          {LOGO_LIST.map((e) => (
            <li className='text-white' key={e}>
              <Icon name={e} size={100} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Integration

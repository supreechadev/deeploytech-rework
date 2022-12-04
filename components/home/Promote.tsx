import { FC } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import PROMOTE_IMAGE from '@assets/images/promote-image.svg'

const Promote: FC = () => {
  const { t } = useTranslation('home')

  return (
    <section id='promote' className='bg-primary'>
      <div className='container max-w-7xl pt-12 text-center text-white lg:pt-24'>
        <h2 className='mb-4 text-xl font-medium lg:text-3xl'>{t('promote__title')}</h2>
        <p>{t('promote__content')}</p>
        <Image className='mt-12 lg:mt-20' src={PROMOTE_IMAGE} alt='promote image' />
      </div>
    </section>
  )
}

export default Promote

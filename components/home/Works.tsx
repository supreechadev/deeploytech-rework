import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Headline from '@components/common/Headline'

import NUDD_LOGO from '@assets/logos/clients/nudd.svg'
import YOUNGHAPPY_LOGO from '@assets/logos/clients/younghappy.svg'
import GET_SA_LOGO from '@assets/logos/clients/get-sa.svg'
import MEMORIZE_LOGO from '@assets/logos/clients/memorize.svg'
import ANYA_LOGO from '@assets/logos/clients/anya.svg'
import GURU_ACADEMY_LOGO from '@assets/logos/clients/guru-academy.svg'
import BOOKFIRST_LOGO from '@assets/logos/clients/bookfirst.svg'
import CHEEVAMITR_LOGO from '@assets/logos/clients/cheevamitr.svg'
import NUDD_IMAGE from '@assets/images/works/nudd.svg'
import YOUNGHAPPY_WEB_IMAGE from '@assets/images/works/younghappy-web.svg'
import GET_SA_IMAGE from '@assets/images/works/get-sa.svg'
import MEMORIZE_IMAGE from '@assets/images/works/memorize.svg'
import ANYA_IMAGE from '@assets/images/works/anya.svg'
import GURU_ACADEMY_IMAGE from '@assets/images/works/guru-academy.svg'
import YOUNGHAPPY_APP_IMAGE from '@assets/images/works/younghappy-app.svg'
import BOOKFIRST_IMAGE from '@assets/images/works/bookfirst.svg'
import CHEEVAMITR_IMAGE from '@assets/images/works/cheevamitr.svg'

interface ProjectCardProps {
  title: string
  type: string
  logo: string
  image: string
}

const ProjectCard: FC<ProjectCardProps> = ({ title, type, logo, image }) => (
  <div className='overflow-hidden rounded-lg bg-[#f5f5f5] p-2'>
    <Image className='mx-auto' src={image} alt={title + ' image'} />
    <div className='mx-auto mt-5 flex max-w-md'>
      <div className='flex w-32 flex-shrink-0 items-start justify-center py-2 px-4'>
        <Image src={logo} alt={title + ' logo'} />
      </div>
      <div className='col-span-2 flex flex-grow flex-col'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-slate-600'>{type}</p>
      </div>
    </div>
  </div>
)

const PROJECT_LIST: Array<ProjectCardProps> = [
  {
    title: 'NUD:D',
    type: 'Application&Website',
    logo: NUDD_LOGO,
    image: NUDD_IMAGE,
  },
  {
    title: 'YOUNGHAPPY WEBSITE',
    type: 'Website',
    logo: YOUNGHAPPY_LOGO,
    image: YOUNGHAPPY_WEB_IMAGE,
  },
  {
    title: 'GET SA',
    type: 'Application',
    logo: GET_SA_LOGO,
    image: GET_SA_IMAGE,
  },
  {
    title: 'Memorize brownie',
    type: 'Website',
    logo: MEMORIZE_LOGO,
    image: MEMORIZE_IMAGE,
  },
  {
    title: 'ANYA MEDITEC',
    type: 'LINE OA',
    logo: ANYA_LOGO,
    image: ANYA_IMAGE,
  },
  {
    title: 'Guru Academy',
    type: 'Website',
    logo: GURU_ACADEMY_LOGO,
    image: GURU_ACADEMY_IMAGE,
  },
  {
    title: 'YOUNGHAPPY APPLICATION',
    type: 'Application',
    logo: YOUNGHAPPY_LOGO,
    image: YOUNGHAPPY_APP_IMAGE,
  },
  {
    title: 'Bookfirst',
    type: 'Website',
    logo: BOOKFIRST_LOGO,
    image: BOOKFIRST_IMAGE,
  },
  {
    title: 'Cheevamitr',
    type: 'LINE OA',
    logo: CHEEVAMITR_LOGO,
    image: CHEEVAMITR_IMAGE,
  },
]

const Works: FC = () => {
  const { t } = useTranslation('home')

  return (
    <section id='my-works' className='pt-10 lg:pt-14'>
      <div className='container max-w-7xl'>
        <Headline>{t('works__title')}</Headline>
        <p className='mb-2 font-prompt text-2xl font-medium dark:text-white lg:mb-4 lg:text-4xl'>
          {t('works__content1')}
          <strong className='font-medium  text-primary '>{t('works__content2')}</strong>
        </p>
        <div className='grid gap-8 lg:grid-cols-3 '>
          {PROJECT_LIST.map((e) => (
            <ProjectCard {...e} key={e.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works

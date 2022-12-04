import { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Footer: FC = () => {
  const { t } = useTranslation('common')

  return (
    <footer id='contact' className='pt-16 pb-10 lg:pt-32 lg:pb-20'>
      <div className='container flex max-w-7xl flex-col space-y-12'>
        <h2 className='whitespace-pre-line font-prompt text-5xl font-medium dark:text-white'>
          {t('footer__title')}
        </h2>
        <Link className='text-prompt underline dark:text-white' href='/'>
          {t('footer__back-to-top__button')}
        </Link>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div>
            <p className='mb-2 text-lg text-slate-600 dark:text-white'>{t('footer__invite')}</p>
            <p className='font-prompt text-lg dark:text-white'>
              contact@deeploytech.co <br /> Or 053 010 187
            </p>
          </div>
          <div>
            <h3 className='font-prompt text-lg uppercase dark:text-white'>
              {t('footer__contact__headline')}
            </h3>
            <p className=' text-slate-600 dark:text-white'>{t('footer__contact__content')}</p>
          </div>
          <div>
            <h3 className='font-prompt text-lg uppercase dark:text-white'>
              {t('footer__office-time__headline')}
            </h3>
            <p className=' text-slate-600 dark:text-white'>{t('footer__contact__content')}</p>
          </div>
          <div>
            <h3 className='font-prompt text-lg uppercase dark:text-white'>
              {t('footer__social__headline')}
            </h3>
            <a
              href='https://www.facebook.com/deeploytech'
              target='_blank'
              rel='noreferrer'
              className='text-slate-600 dark:text-white'
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

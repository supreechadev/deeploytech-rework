import { FC, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Logo from '@components/common/Logo'
import SwitchThemeButton from '@components/common/SwitchThemeButton'
import SwitchLocaleButton from '@components/common/SwitchLocaleButton'

import useMediaQuery from '@hooks/useMediaQuery'
import useIsClient from '@hooks/useIsClient'
import useIsScrolling from '@hooks/useIsScrolling'

interface NavItemProps {
  title: string
  href: string
  className?: string
}

const NavItem: FC<NavItemProps> = ({ title, href, className }) => (
  <li>
    <Link
      href={href}
      scroll={href === '/'}
      className={`relative font-prompt text-sm uppercase transition-all after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:w-full after:origin-center after:scale-0 after:transition-all after:content-[''] hover:after:scale-100 ${className}`}
    >
      {title}
    </Link>
  </li>
)

NavItem.defaultProps = {
  className: '',
}

const navVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const Navbar: FC = () => {
  const { t } = useTranslation('common')

  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const isScrolling = useIsScrolling()
  const isClient = useIsClient()

  if (!isClient) return null

  const NAV_ITEM_LIST = [
    {
      title: t('nav__home'),
      href: '/',
    },
    {
      title: t('nav__about-us'),
      href: '#about-us',
    },
    {
      title: t('nav__product-support'),
      href: '#our-product-support',
    },
    {
      title: t('nav__services'),
      href: '#our-services',
    },
    {
      title: t('nav__works'),
      href: '#my-works',
    },
    {
      title: t('nav__clients'),
      href: '#clients',
    },
    {
      title: t('nav__contact'),
      href: '#contact',
    },
  ]

  return (
    <motion.header
      variants={navVariant}
      initial='hidden'
      animate='visible'
      className={`fixed top-0 left-0 z-30 w-full transition-all ${
        isScrolling
          ? 'bg-white py-3 shadow dark:border-b dark:border-slate-600 dark:bg-gray-800 dark:shadow-none'
          : 'py-5 lg:py-8'
      }`}
    >
      <div className='container flex max-w-7xl items-center space-x-4'>
        <Logo className='mr-auto flex-shrink-0' width={isScrolling || !isLargeScreen ? 100 : 140} />
        {isLargeScreen && (
          <ul
            className={`flex h-full space-x-4 ${isScrolling ? ' dark:text-white' : 'text-white'}`}
          >
            {NAV_ITEM_LIST.map((e) => (
              <NavItem
                {...e}
                key={e.title}
                className={isScrolling ? 'after:bg-primary hover:text-primary' : ' after:bg-white'}
              />
            ))}
          </ul>
        )}

        <div className='flex flex-shrink-0 items-center space-x-4 pl-4 lg:border-l'>
          <SwitchLocaleButton />
          <SwitchThemeButton className={`${isScrolling ? 'text-primary' : 'text-white'}`} />
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar

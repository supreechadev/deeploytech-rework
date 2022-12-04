import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LOGO from '@assets/logos/logo.svg'

interface LogoProps {
  className?: string
  width?: number
}

const Logo: FC<LogoProps> = ({ className, width }) => {
  return (
    <Link href='/' className={`transition-all hover:brightness-110 ${className}`}>
      <Image src={LOGO} alt='deeploytech logo' className='transition-all' width={width} />
    </Link>
  )
}

Logo.defaultProps = {
  className: '',
  width: 100,
}

export default Logo

import { FC } from 'react'

export type IconName =
  | 'bright'
  | 'browser-setting'
  | 'chevron-double-right'
  | 'flutter'
  | 'golang'
  | 'hand-clasp'
  | 'hand-service'
  | 'kotlin'
  | 'magnifying-chart'
  | 'metophone'
  | 'mobile'
  | 'moon'
  | 'mornitor-setting'
  | 'mornitor'
  | 'nextjs'
  | 'react'
  | 'research'
  | 'shiny-star'
  | 'sun'
  | 'swift'
  | 'thumb-up'
  | 'typescript'
  | 'ux'

interface IconProps {
  name: IconName
  size?: number | string
  color?: string
  className?: string
}

const Icon: FC<IconProps> = ({ name, size, color, className }) => (
  <i className={`icon ${name} ${className}`} style={{ fontSize: size, color }} />
)

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
  className: '',
}

export default Icon

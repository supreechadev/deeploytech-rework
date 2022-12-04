import { FC, PropsWithChildren } from 'react'

const Headline: FC<PropsWithChildren> = ({ children }) => (
  <h2 className='mb-4 text-sm text-primary'>⎯⎯ {children}</h2>
)

export default Headline

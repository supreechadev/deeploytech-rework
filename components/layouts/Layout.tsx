import { FC, PropsWithChildren } from 'react'

import Navbar from '@components/layouts/Navbar'
import Footer from '@components/layouts/Footer'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

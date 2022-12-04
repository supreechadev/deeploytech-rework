import { useEffect, useState } from 'react'

function useIsScrolling(checkpoint = 1): boolean {
  const [isScrolling, setScrolling] = useState<boolean>(false)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setScrolling(currentScrollPos >= checkpoint)
  }

  useEffect(() => {
    if (!window) return

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [typeof window, handleScroll])

  return isScrolling
}

export default useIsScrolling

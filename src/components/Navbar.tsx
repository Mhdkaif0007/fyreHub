import logo from '../assets/fyreLogo.svg'
import { useEffect, useRef, useState } from 'react'

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollYRef = useRef<number>(0)
  const navContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollYRef.current && currentY > 50) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      lastScrollYRef.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getOffset = () => {
    const container = navContainerRef.current
    if (!container) return 80
    const height = container.getBoundingClientRect().height
    return Math.ceil(height + 10)
  }

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToIdWithOffset = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - getOffset()
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('contact-form-container') || document.getElementById('contact-section')
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - getOffset()
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div className={`bg-opacity-10 w-full sticky z-50 top-[5px] mt-[5px] flex items-center justify-center transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div ref={navContainerRef} data-nav-container className='flex items-center justify-between border border-[#AFFC41] rounded-[20px] p-[10px] w-4/5 backdrop-blur-lg '>
        <a href="#" onClick={scrollToTop}>
          <img src={logo} alt="FyreHub" srcSet="" className='cursor-pointer' />
        </a>
        <div className='flex items-center justify-around gap-5'>
          <a href="#" onClick={scrollToTop} className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>Home</a>
          <a href="#about-us" onClick={scrollToIdWithOffset('about-us')} className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>About Us</a>
          <a href="#what-we-do" onClick={scrollToIdWithOffset('what-we-do')} className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>What We Do</a>
          <a href="#our-works" onClick={scrollToIdWithOffset('our-works')} className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>Our Works</a>
          <a href="#contact-section" onClick={goToContact} className='bg-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:text-[#25252590] text-[#252525] p-2 rounded-md'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

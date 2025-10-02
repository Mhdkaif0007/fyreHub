import logo from '../assets/fyreLogo.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <div className='bg-opacity-10 w-full sticky z-50 top-[5px] mt-[5px] flex items-center justify-center'>
      <div className='flex items-center justify-between border border-[#AFFC41] rounded-[20px] p-[10px] w-4/5 backdrop-blur-lg '>
        <Link to="/">
          <img src={logo} alt="FyreHub" srcSet="" className='cursor-pointer' />
        </Link>
        <div className='flex items-center justify-around gap-5'>
          <Link to="/" className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>Home</Link>
          <a href="#about-us" className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>About Us</a>
          <a href="#what-we-do" className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>What We Do</a>
          <a href="#our-works" className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>Our Works</a>
          <a href="#contact-section" className='bg-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:text-[#25252590] text-[#252525] p-2 rounded-md'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

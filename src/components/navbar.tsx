import { FloatingNav, NavItem } from '@/components/ui/floating-navbar'
import React from 'react'

const navLinks: NavItem[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
]

function Navbar() {
  return (
    <div className='relative w-full'>
      <FloatingNav navItems={navLinks} />
    </div>
  )
}

export default Navbar

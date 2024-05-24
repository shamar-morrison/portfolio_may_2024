'use client'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import ShimmerButton from '@/components/ui/shimmer-button'

export type NavItem = {
  name: string
  link: string
  icon?: JSX.Element
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.005) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-[#ffd6d6] bg-[#ffd6d6] bg-opacity-5 py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(25,28,33,0.08)]  backdrop-blur-lg dark:border-white/[0.2] dark:bg-black',
          className,
        )}>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn('relative flex items-center space-x-1 text-black')}>
            <span className='block sm:hidden'>{navItem.icon}</span>
            <span className='hidden text-sm sm:block'>{navItem.name}</span>
          </Link>
        ))}
        <ShimmerButton className='shadow-2xl'>
          <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 '>
            Download CV
          </span>
        </ShimmerButton>
      </motion.div>
    </AnimatePresence>
  )
}

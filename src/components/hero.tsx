import WordRotate from '@/components/ui/word-rotate'
import React from 'react'

function Hero() {
  return (
    <section
      className='min-h-screen bg-[#ffd6d6] flex flex-col items-center justify-center'
      suppressHydrationWarning>
      <div className='flex items-center'>
        <span className='text-[7rem] font-extrabold tracking-tighter bg-hero-text-gradient bg-clip-text text-transparent'>
          Hi, I&apos;m Shamar
        </span>
        <span className='text-[5rem] ml-4'>👋</span>
      </div>
      <div className='text-lg flex items-center gap-1 leading-tight'>
        <p>I am a passionate Software Engineer with an interest in</p>
        <WordRotate
          className='text-lg font-bold text-black dark:text-white'
          words={[
            'Web Development.',
            'UI/UX Design.',
            'Frontend Frameworks.',
            'API Design.',
            'Content Management Systems.',
            'SEO Strategies.',
            'Web Performance Optimization.',
            'Responsive Design.',
          ]}
        />
      </div>
    </section>
  )
}

export default Hero

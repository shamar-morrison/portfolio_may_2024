import WordRotate from '@/components/ui/word-rotate'
import React from 'react'

function Hero() {
  return (
    <section className='relative flex h-screen min-h-screen w-full flex-col items-center justify-center bg-[#ffd6d6] bg-hero-bg bg-cover bg-center bg-no-repeat'>
      <div className='flex items-center'>
        <span className='bg-hero-text-gradient bg-clip-text text-[7rem] font-extrabold tracking-tighter text-transparent'>
          Hi, I&apos;m Shamar
        </span>
        <span className='ml-4 text-[5rem]'>👋</span>
      </div>
      <div className='flex items-center gap-1 text-lg leading-tight'>
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

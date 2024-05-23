import { Button } from '@/components/ui/button'
import WordRotate from '@/components/ui/word-rotate'
import { ChevronRight, MessageCircle, MessageSquareText } from 'lucide-react'
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
        <p className='text-[##050748]'>
          I am a passionate Software Engineer with an interest in
        </p>
        <WordRotate
          className='text-lg font-bold text-[##050748]'
          words={[
            'Web Development.',
            'UI/UX Design.',
            'Frontend Frameworks.',
            'API Design.',
            'Mobile Development.',
            'SEO Strategies.',
            'Web Performance Optimization.',
            'Responsive Design.',
          ]}
        />
      </div>
      <div className='mt-9 flex gap-8'>
        <Button size={'lg'} className='bg-button-gradient shadow-btn-shadow'>
          My Projects
          <ChevronRight size={15} className='ml-1' />
        </Button>
        <Button size={'lg'} className='bg-button-gradient shadow-btn-shadow'>
          Let&apos;s Talk
          <MessageSquareText size={15} className='ml-2' />
        </Button>
      </div>
    </section>
  )
}

export default Hero

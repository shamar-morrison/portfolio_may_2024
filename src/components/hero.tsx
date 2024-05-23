import React from 'react'

function Hero() {
  return (
    <section className='min-h-screen bg-[#ffd6d6] flex flex-col items-center justify-center'>
      <div className='flex items-center'>
        <span className='text-[7rem] font-extrabold tracking-tighter bg-hero-text-gradient bg-clip-text text-transparent'>
          Hi, I&apos;m Shamar
        </span>
        <span className='text-[5rem] ml-4'>👋</span>
      </div>
      <p className='text-lg'>
        I am a passionate Software Engineer with an interest in
      </p>
    </section>
  )
}

export default Hero

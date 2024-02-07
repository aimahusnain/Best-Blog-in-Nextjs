'use client'

import React from 'react'
import useReadingProgress from "@/src/components/Hooks/useReadingProgress"

const ScrollProgressBar = () => {
  const completion = useReadingProgress();

  return (
        <span
        style={{transform: `translateX(${completion - 100}%)`}}
        className='transition-all duration-150 fixed z-[9999] bg-primary h-1 w-full sm:top-0 top-20'
        />
  )
}

export default ScrollProgressBar
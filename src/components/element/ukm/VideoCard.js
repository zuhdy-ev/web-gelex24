'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function VideoCard({ videos, onSlideChange }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState('next')

  useEffect(() => {
    onSlideChange(currentSlide)
  }, [currentSlide, onSlideChange])

  const handleNext = () => {
    setDirection('next')
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  const handlePrevious = () => {
    setDirection('prev')
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  return (
    <div className="relative flex h-full w-full items-center sm:pl-40 md:scale-110 lg:scale-125">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`ease absolute left-0 right-0 m-auto mt-14 h-80 w-60 cursor-pointer rounded-xl border-[6px] border-[#E6A263] bg-[#7F152E] transition-all duration-[400ms] sm:mb-20 sm:mt-0 ${
            currentSlide === index
              ? 'z-30 translate-x-0'
              : direction === 'next'
                ? currentSlide === (index === 0 ? videos.length - 1 : index - 1)
                  ? 'z-0 translate-x-[30%] scale-90 brightness-50'
                  : 'z-10 -translate-x-[30%] scale-90 brightness-50'
                : currentSlide === (index === 0 ? videos.length - 1 : index - 1)
                  ? 'z-10 translate-x-[30%] scale-90 brightness-50'
                  : 'z-0 -translate-x-[30%] scale-90 brightness-50'
          }`}
          style={{
            pointerEvents: currentSlide === index ? 'auto' : 'none',
          }}
        >
          <div className="relative h-full w-full rounded-xl">
            {currentSlide === index ? (
              <iframe
                src={video}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute left-5 top-4 h-3/4 w-10/12 rounded-md"
              ></iframe>
            ) : (
              (() => {
                const videoId = video.split('/embed/')[1]?.split('?')[0]
                if (videoId) {
                  return (
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                      alt="Video Thumbnail"
                      className="absolute left-5 top-4 h-3/4 w-10/12 rounded-md object-cover"
                    />
                  )
                }
                return null
              })()
            )}
            <Image
              src="/assets/ukm/hiasan-card.png"
              alt="hiasan"
              width={207}
              height={28}
              className="absolute bottom-6 right-14 w-[120px]"
            />
          </div>
        </div>
      ))}
      <div className="absolute z-20 mt-32 flex h-full w-full items-end justify-center space-x-10 sm:right-0 sm:mt-40 sm:h-[25%]">
        <button onClick={handlePrevious}>
          <Image
            src="/assets/ukm/slide-left.png"
            alt="previous arrow"
            width={68}
            height={73}
            className="w-[50px]"
          />
        </button>
        <button onClick={handleNext}>
          <Image
            src="/assets/ukm/slide-right.png"
            alt="next arrow"
            width={68}
            height={73}
            className="w-[50px]"
          />
        </button>
      </div>
    </div>
  )
}

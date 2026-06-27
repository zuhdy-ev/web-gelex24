import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import performersData from '../../../../data/performers'
import rundownData from '../../../../data/rundown'

export default function Popup({ selectedDay, closePopup }) {
  const [activeTab, setActiveTab] = useState('rundown')
  const [expandedIndex, setExpandedIndex] = useState(null)
  const performers = performersData?.[`day${selectedDay}`] || []
  const rundown = rundownData?.[`day${selectedDay}`] || []

  useEffect(() => {
    // Set overflow hidden to prevent background scrolling
    document.body.style.overflow = 'hidden'

    // Cleanup to remove overflow hidden when the component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const renderTabs = () => {
    let activeRundownAsset, activePenampilAsset
    let rundownTextClass, penampilTextClass

    switch (selectedDay) {
      case 2:
        activeRundownAsset = '/assets/beranda/timeline/active_rundown_2.png'
        activePenampilAsset = '/assets/beranda/timeline/active_penampil_2.png'
        rundownTextClass =
          'bg-gradient-to-r from-[#FFE5AF] to-[#E6A263] bg-clip-text text-transparent'
        penampilTextClass =
          'bg-gradient-to-b from-[#39793F] to-[#22564D] bg-clip-text text-transparent'
        break
      case 3:
        activeRundownAsset = '/assets/beranda/timeline/active_rundown_3.png'
        activePenampilAsset = '/assets/beranda/timeline/active_penampil_3.png'
        rundownTextClass =
          'bg-gradient-to-r from-[#FFE5AF] to-[#E6A263] bg-clip-text text-transparent'
        penampilTextClass =
          'bg-gradient-to-b from-[#441C42] to-[#692D63] bg-clip-text text-transparent'
        break
      default:
        activeRundownAsset = '/assets/beranda/timeline/active_rundown.png'
        activePenampilAsset = '/assets/beranda/timeline/active_penampil.png'
        rundownTextClass =
          'bg-gradient-to-r from-[#FFE5AF] to-[#E6A263] bg-clip-text text-transparent'
        penampilTextClass =
          'bg-gradient-to-b from-[#7F152E] to-[#BB3C59] to-[#F15075] bg-clip-text text-transparent'
    }

    return (
      <div>
        <div className="z-[1000] flex h-fit max-h-[600px] w-[60vw] max-w-[1000px] transform s:w-[80vw] s:translate-y-0">
          <div
            className="relative flex h-10 w-full cursor-pointer items-center justify-between px-2 s:h-14 lg:h-16"
            onClick={() => setActiveTab(activeTab === 'rundown' ? 'penampil' : 'rundown')}
          >
            <Image
              src={activeTab === 'rundown' ? activeRundownAsset : activePenampilAsset}
              alt="Active Tab Background"
              layout="fill"
              className="inset-0 object-contain s:w-[80vw] s:object-fill"
            />
            <span
              className={`relative z-[1200] flex w-1/2 items-center justify-center text-center font-magicretro text-[4.2vw] s:text-[150%] ${
                activeTab === 'rundown' ? rundownTextClass : penampilTextClass
              }`}
            >
              Rundown
            </span>
            <span
              className={`relative z-[1200] flex w-1/2 items-center justify-center text-center font-magicretro text-[4.2vw] s:text-[150%] ${
                activeTab === 'penampil' ? rundownTextClass : penampilTextClass
              }`}
            >
              Penampil
            </span>
          </div>
        </div>
      </div>
    )
  }

  const renderRundownList = () => (
    <div
      className={`relative z-[1100] flex h-fit w-fit items-center justify-center ${activeTab !== 'rundown' ? 'hidden' : ''}`}
    >
      <div className="flex h-[95vw] max-h-[600px] w-[60vw] max-w-[1000px] gap-1 px-1 s:mt-2 s:h-[40vw] s:w-[80vw]">
        <p className="flex h-full w-1/3 items-center justify-center rounded-md border border-goldgradientEnd p-2 text-center text-[3vw] text-goldgradientStart s:text-[150%]">
          {selectedDay !== 1 && selectedDay !== 2 ? '19.00' : '17.00'} - Selesai
        </p>
        <div className="scrollbar-list flex w-3/4 scroll-ml-1 flex-col items-start overflow-y-auto overflow-x-hidden">
          {rundown.map((rundownItem, index) => (
            <div key={index} className="flex w-full flex-col items-center">
              <div className="mb-1 flex w-full rounded-md bg-gradient-to-r from-[#FFE5AF] to-[#E6A263] p-2">
                <span className="font-mulish text-[4vw] text-[#7F152E] s:text-[120%]">
                  {rundownItem.group}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderPerformersList = () => (
    <div
      className={`relative z-[1100] flex h-fit w-fit flex-col items-center justify-center ${activeTab !== 'penampil' ? 'hidden' : ''}`}
    >
      <div className="flex h-[95vw] max-h-[600px] w-[60vw] max-w-[1000px] flex-col gap-1 px-1 s:h-[40vw] s:w-[80vw]">
        <div className="scrollbar-list flex w-full flex-col items-start overflow-y-auto overflow-x-hidden scroll-smooth s:mt-3">
          {performers.map((performer, index) => (
            <div key={index} className="mb-4 w-full cursor-pointer">
              <div
                className="flex w-full items-center justify-between"
                onClick={() => toggleDescription(index)}
              >
                <h3 className="font-magicretro text-[4vw] text-[#FFE5AF] s:text-[160%]">
                  {performer.title}
                </h3>
                <div className="ml-2 transition-transform duration-300 ease-in-out">
                  <Image
                    src={'/assets/beranda/timeline/panah_bawah.png'}
                    alt={expandedIndex === index ? 'Collapse' : 'Expand'}
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ease-in-out ${
                      expandedIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {expandedIndex === index && (
                  <div className="px-2 pt-2">
                    <p className="mb-2 text-justify font-mulish text-[4vw] text-[#FFE5AF] s:text-[130%]">
                      {performer.group}
                    </p>
                    <p className="text-justify font-mulish text-[4vw] text-[#FFE5AF] s:text-[130%]">
                      {performer.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderPopupContent = () => (
    <div className="relative h-full w-full">
      {/* Mobile background for small screens */}
      <div className="block s:hidden">
        <Image
          src={`/assets/beranda/timeline/popup-mobile-day${selectedDay}.png`}
          alt={`Popup Day ${selectedDay}`}
          layout="fill"
          objectFit="contain"
          className="h-full w-full"
        />
      </div>
      {/* Desktop background for medium to extra-large screens */}
      <div className="hidden s:block">
        <Image
          src={`/assets/beranda/timeline/bg-popup-day${selectedDay}.png`}
          alt={`Popup Day ${selectedDay}`}
          layout="fill"
          objectFit="contain"
          className="h-full w-full"
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-1">
        <div>{renderTabs()}</div>
        <div className="relative z-[1000]">
          {renderRundownList()}
          {renderPerformersList()}
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative flex h-full w-full items-center justify-center"
      >
        {renderPopupContent()}
      </motion.div>
      <div className="absolute right-4 top-4 z-[1100]">
        <Image
          src="/assets/navbar/navbar-close-mobile.png"
          alt="Close Button"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={closePopup}
        />
      </div>
    </div>
  )
}

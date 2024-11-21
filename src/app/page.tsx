import React from 'react'
import HeroSection from "@/components/HeroSection"
import SelectDevice from '@/components/SelectDevice'
import FeaturedDevice from '@/components/FeaturedDevice'
import FlashSales from '@/components/FlashSales'
import PopularItems from '@/components/PopularItems'
import ThisMonth from '@/components/ThisMonth'
import OurProducts from '@/components/OurProducts'


const page = () => {
  return (
    <div>

      <HeroSection/>
      <SelectDevice/>
      <FeaturedDevice/>
      <FlashSales/>
      <PopularItems/>
      <ThisMonth/>
      <OurProducts/>
    </div>
  )
}

export default page

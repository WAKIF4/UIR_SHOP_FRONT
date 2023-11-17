import React from 'react'
import Header from '../components/home/Header'
import SwiperC from '../components/home/SwiperC'
import { useLocation } from 'react-router-dom'

function Home() {
  return (
    <div>
          <Header/>
        <SwiperC/>
    </div>
  )
}

export default Home
import React from 'react'
import HomeHero from '../components/content/home/HomeHero'
import HomeCommunity from '../components/content/home/HomeCommunity'
import HomeGoals from '../components/content/home/HomeGoals'
import HomeInterests from '../components/content/home/HomeInterests'
import HomeAbout from '../components/content/home/HomeAbout'
import HomeEvents from '../components/content/home/HomeEvents'

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCommunity />
      <HomeGoals />
      <HomeInterests />
      <HomeAbout />
      <HomeEvents />
    </>
  )
}

export default Home
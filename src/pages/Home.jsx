import React from 'react'
import HomeHero from '../components/content/home/HomeHero'
import Community from '../components/Community'
import HomeGoals from '../components/content/home/HomeGoals'
import HomeInterests from '../components/content/home/HomeInterests'
import HomeAbout from '../components/content/home/HomeAbout'
import HomeEvents from '../components/content/home/HomeEvents'

const Home = () => {
  return (
    <>
      <HomeHero />
      <Community />
      <HomeGoals />
      <HomeInterests />
      <HomeAbout />
      <HomeEvents />
    </>
  )
}

export default Home
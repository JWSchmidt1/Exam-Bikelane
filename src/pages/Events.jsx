import React from 'react'
import EventsHero from '../components/content/events/EventsHero'
import EventsGallery from '../components/content/events/EventsGallery'
import EventsSponsor from '../components/content/events/EventsSponsor'
import EventsContact from '../components/content/events/EventsContact'

const Events = () => {
  return (
    <>
      <EventsHero />
      <EventsGallery />
      <EventsSponsor />
      <EventsContact />
    </>
  )
}

export default Events
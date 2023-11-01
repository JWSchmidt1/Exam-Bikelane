import React from 'react'
import ContactHero from '../components/content/contact/ContactHero'
import ContactForm from '../components/content/contact/ContactForm'
import GoogleMaps from '../components/GoogleMaps'

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <GoogleMaps />
    </>
  )
}

export default Contact
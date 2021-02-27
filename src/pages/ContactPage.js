import React from 'react'
import Info from '../components/AboutPage/Info'
import Contact from '../components/ContactPage/Contact'
import Hero from '../components/Hero'
import img from '../images/contactBcg.jpeg'

function ContactPage() {
    return (
        <>
            <Hero img={img} title="contact us" max="true"></Hero>
            <Contact />
        </>
    )
}

export default ContactPage

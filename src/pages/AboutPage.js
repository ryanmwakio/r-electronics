import React from 'react'
import Info from '../components/AboutPage/Info'
import Hero from '../components/Hero'
import img from '../images/aboutBcg.jpeg'

function AboutPage() {
    return (
        <>
            <Hero img={img} title="about us" max="true"></Hero>
            <Info />
        </>
    )
}

export default AboutPage

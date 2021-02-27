import React from 'react'
import { Link } from 'react-router-dom'


import Hero from '../components/Hero'
import Featured from '../components/HomePage/Featured'
import Services from '../components/HomePage/Services'
import { ProductConsumer } from '../context'


function HomePage() {
    return (
        <>
            <Hero title="awesome gadgets" max="true">
                <Link to="/products" className="main-link" style={{ margin: '2rem' }}>our products</Link>
            </Hero>
            <Services>

            </Services>
            <Featured></Featured>
        </>
    )
}

export default HomePage

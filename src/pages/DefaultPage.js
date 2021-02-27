import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import img from '../images/defaultBcg.jpeg'

function DefaultPage() {
    return (
        <>
            <Hero title="Error 404!" img={img} max="true">
                <h6 className="text-uppercase">page not found</h6>
                <Link to="/" className="main-link" style={{ margin: '2rem' }}>Go home</Link>
            </Hero>
        </>
    )
}

export default DefaultPage

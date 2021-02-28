import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'

function Hero({ img, title, max, children }) {

    return (
        <HeroWrapper max={max} img={img}>

            <div className="banner">
                <h1 className="title">{title}</h1>
                {children}
            </div>

        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => props.max ? '80vh' : '70vh'};
    color: var(--mainWhite);
    background: linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), url(${props => props.img}) center/cover no-repeat;

    .title {
        padding-top: 2rem;
        font-size: 3.5rem;
        text-shadow: 4px 10px 2px rgba(0,0,0,0.1);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
    }

    @media(max-width: 576px) {

        min-height: ${props => props.max ? '80vh' : '80vh'};

        .title {
            font-size: 1.2rem;
        }
    }
`

Hero.defaultProps = {
    img: mainBcg
};

export default Hero

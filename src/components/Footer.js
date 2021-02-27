import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'


function Footer() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    return (
                        <FooterWrapper>
                            <div className="container py-3 max-auto">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="text-capitalize">
                                            copyright &copy; R-Electronics {new Date().getFullYear()}.
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        {value.socialLinks.map(item => (
                                            <a href={item.url} key={item.id} className="icon" target="_blank" rel="noreferrer noopener" title={item.name}><i className={item.icon}></i></a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </FooterWrapper>
                    )
                }}
            </ProductConsumer>
        </>
    )
}


const FooterWrapper = styled.footer`
    background: var(--darkGrey);
    color: var(--mainWhite);
    font-size: .8rem;
    width: 100%;

    .icon {
        font-size: 1rem;
    }

    a {
        color: var(--mainWhite);
        margin-right: 1rem;
    }

    a:hover{
        color: var(--primaryColor);
    }

`

export default Footer

import React, { Component } from 'react'
import styled from 'styled-components'

export default class Services extends Component {

    state = {
        services: [
            {
                id: 1,
                icon: "fas fa-truck",
                title: "free transport",
                text: "Free transport for residents living around the city and its outskirts. This is to ensure that your electronic arrives in good condition."
            },
            {
                id: 2,
                icon: "fas fa-undo",
                title: "30 days return policy",
                text: "We have our 30day return policy for faulty goods all of which will be replaced on confirmation that the damage was not intentional."
            },
            {
                id: 3,
                icon: "fas fa-credit-card",
                title: "secured payment",
                text: "Our payment systems have been designed to ensure that your transcations are secured with the necessary security protocols."
            }
        ]
    }
    render() {
        return (
            <>
                <ServicesWrapper className="py-5">
                    <div className="container">
                        <div className="row">
                            {this.state.services.map(item => {
                                return (
                                    <div className="col-sm-12 col-md-4 mx-auto text-center my-3" key={item.id}>

                                        <div className="service-icon">
                                            <i className={item.icon}></i>
                                        </div>

                                        <div className="text-capitalize mt-3 h5">
                                            {item.title}
                                        </div>

                                        <div className="mt-3 services-text">
                                            {item.text}
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </ServicesWrapper>
            </>
        )
    }
}


const ServicesWrapper = styled.section`
    background: rgba(95,183,234,0.5);

    .service-icon {
        font-size: 2.5rem;
        color: var(--primaryColor);
    }

   

    p{
        color: var(--darkGrey);
    }
`


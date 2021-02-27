import React from 'react'
import Title from '../Title'
import img from '../../images/aboutBcg.jpeg'

function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} alt="about image" className="img-fluid img-thumbnail" style={{ background: "var(--mainGrey)" }} />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="R-eletronics" center />
                        <p className="text-lead text-muted my-3">
                            R-electronics is an electronics store with the latest of tech gadgets. From mobile phones to televisions to radios we deliver it all at affordable prices. The store was opened 5yrs agoand ever since it has been a success and has earned its reputation as the best tech store in town.
                        </p>
                        <p className="text-lead text-muted my-3">
                            We have delivered electronics to major companies and to individuals and have attested to the good quality, awesome services and affordable prices all packaged into one. Well that's R-electronics we are the best at what we do and all done with love and commitment to ensure you enjoy your buying <br />~ Ryan
                        </p>
                        <button type="button" className="main-link" style={{ marginTop: "2rem" }}>more info</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Info

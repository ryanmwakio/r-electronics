import React from 'react'
import Title from '../Title'

function Contact() {
    return (
        <>
            <section className="py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="contact us" />

                        <form action="https://formspree.io/ryanmwakio6@gmail.com" method="POST" className="mt-5">
                            <div className="form-group">
                                <input type="text" className="form-control" name="firstName" placeholder="your name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="user@email.com" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" placeholder="your subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="your message..." name="message" cols="30" rows="5" required></textarea>
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" value="Send" className="form-control bg-primary text-white" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

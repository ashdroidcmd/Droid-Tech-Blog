import React from 'react'
import EmailContact from '../components/EmailContact'
import ContactDetails from '../components/ContactDetails'

const Contact = () => {
    return (
        <div className="container px-5 py-5">
            <div className="row">
                <ContactDetails />
                <EmailContact />
            </div>
        </div>
    )
}

export default Contact
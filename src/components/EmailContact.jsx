import React from 'react'

const EmailContact = () => {
    return (
        <div className="col-md-6 px-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlName1" className="form-label text-white">Name</label>
                    <input type="name" className="form-control" id="exampleFormControlName1" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label  text-white">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label  text-white">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EmailContact
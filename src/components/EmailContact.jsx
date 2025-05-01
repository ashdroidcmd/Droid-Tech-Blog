import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const EmailContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bxw5eus",
                "template_6aj850k",
                form.current,
                "5MoyId7sAmWd_gisF"
            )
            .then(
                () => {
                    alert("Message sent!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send: " + error.text);
                }
            );
    };

    return (
        <div className="col-md-6 px-5">
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlName1" className="form-label text-white">Name</label>
                    <input name="name" type="name" className="form-control" id="exampleFormControlName1" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label  text-white">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label  text-white">Message</label>
                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default EmailContact
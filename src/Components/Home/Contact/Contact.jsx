import { useState } from "react";
import StyledContact from "./ContactStyles.jsx";

const Contact = () => {

const [mailerState, setMailerState] = useState({
    name: "",
    emailValue: "",
    subject: "",
    message: "",
  });

function handleStateChange(e) {
setMailerState((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
}));
}

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch("https://portfolio-api-production-99be.up.railway.app/api/sendemail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ mailerState }),
      })
        .then((res) => res.json())
        .then(() => {
            console.log(mailerState)
          setMailerState({
            emailValue: "",
            name: "",
            subject: "",
            message: "",
          });
        });
  };


  return (
    <StyledContact id="contact">
        <div className="formWrapper">
            <form className="form" onSubmit={sendEmail}>
            <input
                type="text"
                placeholder="Full Name"
                required
                name="name"
                value={mailerState.name}
                onChange={handleStateChange} />

            <input
                type="email"
                placeholder="Email"
                required
                name="emailValue"
                value={mailerState.emailValue}
                onChange={handleStateChange} />

            <input
                type="text"
                placeholder="Subject"
                required
                name="subject"
                value={mailerState.subject}
                onChange={handleStateChange} />

            <textarea
                placeholder="Message"
                required
                name="message"
                value={mailerState.message}
                onChange={handleStateChange} />

                <button type="submit">Send Email</button>
            </form>
        </div>
    </StyledContact>

  );
}

export default Contact;
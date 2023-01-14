import axios from "axios";
import { useState } from "react";
import StyledContact from "./ContactStyles.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    const response = await axios.post(
      "https://portfolio-api-production-99be.up.railway.app/api/sendemail",
      data
    );
  };

  return (
    <StyledContact>
        <div className="formWrapper">
            <form className="form" onSubmit={sendEmail}>
            <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <input
                type="text"
                placeholder="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)} />

            <textarea
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)} />

                <button type="submit">Send Email</button>
            </form>
        </div>
    </StyledContact>

  );
}

export default Contact;
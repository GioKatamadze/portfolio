import { useState } from "react";
import { Comment } from "react-loader-spinner";
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import DesktopStyledContact from "./DesktopContactStyles.jsx";

const DesktopContact = () => {
  const [waiting, setWaiting] = useState(false)
  const [mailerState, setMailerState] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  function sendEmail(e) {
    setWaiting(true);
    e.preventDefault();
    emailjs.send("service_fi04ed3","template_fsh7zob",{
      from_name: mailerState.name,
      from_email: mailerState.email,
      message: mailerState.message,
      subject: mailerState.subject,
      }, '3BuT0s5qDGZtVj6mH')
      .then((result) => {
        console.log(result.text);
        toast.success('Email Sent!')
        setWaiting(false)
        setMailerState({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
      }, (error) => {
        console.log(error.text);
        toast.error("Can not send email...")
        setWaiting(false)
        setMailerState({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
      });
  }


  function handleStateChange(e) {
  setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
  }));
  }

  return (
    <DesktopStyledContact id="contact">
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
                  name="email"
                  value={mailerState.email}
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
                  onChange={handleStateChange} 
                  />

              <button type="submit">
                  {waiting === true ? 
                    <Comment
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#2792f0"
                    backgroundColor="#ffffff"
                  />
                :
                "Send Email"
                }
              </button>
            </form>
        </div>
    </DesktopStyledContact>

  );
}

export default DesktopContact;
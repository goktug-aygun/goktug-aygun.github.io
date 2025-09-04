import ContactPageBox from "./ContactPageBox";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../toast.css";
import "../animations.css";

export default function ContactPage({ innerRef, resources, language }) {
  const contactPageInfo = resources[language]["contact-pg"];

  // Variables for Email.js call
  const [vst_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // References for Form Boxes
  const nameRef = useRef(null);
  const msgRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);

  const [toast, setToast] = useState({ msg: "", type: "" });

  // will transfer to json locales soon
  let exc_icon = "<i class='bi bi-exclamation-triangle'></i>";
  let tup_icon = "<i class='bi bi-hand-thumbs-up'></i>";

  function handleSubmit(event) {
    event.preventDefault();
    validateForm();
  }

  function validateForm() {
    if (vst_name.trim() === "") {
      nameRef.current.focus();
      show(
        `${exc_icon}${contactPageInfo["warnings"]["name_warning"]}`,
        "invalid"
      );
      return false;
    }

    if (email.trim() === "") {
      mailRef.current.focus();
      show(
        `${exc_icon}${contactPageInfo["warnings"]["mail_warning"]}`,
        "invalid"
      );
      return false;
    }

    if (message.trim() === "") {
      msgRef.current.focus();
      show(
        `${exc_icon}${contactPageInfo["warnings"]["msg_warning"]}`,
        "invalid"
      );
      return false;
    }

    show(`${tup_icon}${contactPageInfo["warnings"]["valid_warning"]}`, "valid");
    sendMail();
    return true;
  }

  function sendMail() {
    const params = { name: vst_name, email, number: phone, msg: message };

    console.log("Sending mail with params:", params);

    emailjs
      .send(
        "service_qtuotuz", // Service ID
        "template_a3xdol8", // Template ID
        params,
        "KtdNDRoFA_1mMpx_w" // Public Key
      )
      .then(
        (res) => {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {}
      );
  }

  function show(msg, type = "") {
    setToast({ msg, type });

    setTimeout(() => {
      setToast({ msg: "", type: "" });
    }, 3000);
  }

  return (
    <section id="contact-page" ref={innerRef} className="odd page">
      <div className="text-center">
        <h1 className="page-title">{contactPageInfo["title"]}</h1>
        <p className="lead pt-1">
          {contactPageInfo["desc1"]}
          <br />
          {contactPageInfo["desc2"]}
        </p>
        <img
          src="images/memoji-contact.png"
          style={{ height: "25vh", objectFit: "contain", margin: 0 }}
          alt="contact memoji"
        />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <ContactPageBox
              className="no-bg-change"
              id="name"
              BoxText={contactPageInfo["name-box"]}
              type="text"
              value={vst_name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />

            {/* Email */}
            <ContactPageBox
              className="no-bg-change"
              id="email"
              BoxText={contactPageInfo["email-box"]}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={mailRef}
            />

            {/* Phone Number */}
            <ContactPageBox
              className="no-bg-change"
              id="number"
              BoxText={contactPageInfo["phone-number-box"]}
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              value={phone}
              ref={phoneRef}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, "");
                setPhone(onlyNumbers);
              }}
            />

            {/* Message */}
            <ContactPageBox
              className="no-bg-change"
              id="msg"
              BoxText={contactPageInfo["msg-box"]}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={msgRef}
            />

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-outline-dark w-100 text-center mx-auto"
              >
                {contactPageInfo["send-btn"]}
              </button>
            </div>
          </form>
          <div id="toast-box">
            {toast.msg && (
              <div
                className={`toast ${toast.type}`}
                dangerouslySetInnerHTML={{ __html: toast.msg }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

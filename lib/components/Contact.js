import React, { useState } from "react";
// import Meta from "../components/meta";
import Head from "next/head";

import axios from "axios";
// import { APP_NAME } from "../lib/constants";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const { name, email, phone, message } = inputs;
    console.log(email);
    console.log(message);
    const M = window.M;
    const res = axios
      .get("https://us-central1-netiva-9483f.cloudfunctions.net/sendMessage", {
        params: {
          name: name,
          phone: phone,
          mail: email,
          message: message,
        },
      })
      .then((res) => {
        M.toast({
          html: "Abone olduğunuz için teşekkür ederiz.",
          classes: "rounded green left container",
        });
      })
      .catch((err) => {
        M.toast({
          html: "Üzgünüz, bir hata oluştu.",
          classes: "rounded red left container",
        });
      });

    // const text = await res.text();
    handleResponse(200, "");
  };

  return (
    <>
      {/* <Meta /> */}
      <Head>{/* <title>Contact Me | {APP_NAME}</title> */}</Head>
      {/* <form onSubmit={handleOnSubmit} className=""> */}
      <div
        id="contact-us"
        className="container  center card-panel transparent  z-depth-2 margin-bottom-0"
      >
        <span className="card-header white-text flow-text">
          Bize Mesaj Gönderin
        </span>
        <form className="col s12 m6 " onSubmit={handleOnSubmit}>
          <div className="row ">
            <div className="input-field  ">
              <input
                id="name"
                type="text"
                className="white-text"
                onChange={handleOnChange}
              />
              <label htmlFor="name">Adınız</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field ">
              <input
                id="email"
                type="email"
                className="validate white-text"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="email">Email Adresiniz</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field ">
              <input
                id="phone"
                type="tel"
                className="white-text"
                onChange={handleOnChange}
              />
              <label htmlFor="phone">Telefon Numaranız</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                id="message"
                className="materialize-textarea white-text"
                required
                onChange={handleOnChange}
              ></textarea>
              <label htmlFor="message">Mesajınız</label>
            </div>
          </div>
          <div className=" ">
            <div className="input-field ">
              <button
                className="btn purple btn-extend "
                type="submit"
                disabled={status.submitting}
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Gönder"
                    : "Gönderildi"
                  : "Gönderiliyor..."}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;

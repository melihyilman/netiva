import React, { useState } from "react";
import axios from "axios";
const Subscribe = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { subscriberemail } = e.target.elements;

    console.log(subscriberemail.value);
    const M = window.M;
    axios
      .get("https://us-central1-netiva-9483f.cloudfunctions.net/sendMail", {
        params: {
          email: subscriberemail.value,
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

    // let response = JSON.parse(details);
    setStatus("Submit");
  };

  return (
    <div className=" ">
      <div className="card-panel transparent  z-depth-0">
        <form
          onSubmit={handleSubmit}
          className="white-text"
          autoComplete="nope"
        >
          <div className="input-field">
            <input
              type="email"
              id="subscriberemail"
              className="white-text"
              required
            />
            <label htmlFor="subscriberemail">Email Adresiniz</label>
          </div>

          <button
            type="submit"
            value="Abone Ol"
            className="btn btn-large purple waves-effect waves-red"
          >
            Abone Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;

import { extend } from "jquery";
import React, { useEffect } from "react";

function TypeWriter() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "http://localhost:3000/js/bin/typewriter.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // require("/js/bin/typewriter.js");
  // }, []);
  useEffect(() => {
    // Update the document title using the browser API
    const script = document.createElement("script");
    script.src = "http://localhost:3000/js/bin/typewriter.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <div className="container center flow-text padding-bottom">
      <span>Problemlerinizi </span>

      <a
        href="#"
        id="typewriter"
        className="typewrite flow-text purple-text"
        data-period="2000"
        data-type='["Fırsata", "Verimliliğe", "Kaliteli Ürünlere", "Rekabet Üstünlüğüne"]'
      >
        <span className="wrap flow-text"> </span>
      </a>

      <span> Dönüştürüyoruz</span>
    </div>
  );
}
export default TypeWriter;

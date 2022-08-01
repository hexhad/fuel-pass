import React, { useState, useEffect, useRef } from "react";

import "./Styles.css";
import Card from "./Card";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const _exportPdf = () => {
    html2canvas(document.querySelector("#print-me")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
      pdf.save("fuel-pass.pdf");
    });
  };

  return (
    <div className="main-container">
      <Card inpRef={fileInputRef} update image={setImage} pre={preview} />
      {preview ? (
        <input
          type={"button"}
          value="print me"
          className="fuel-pass_print_me"
          onClick={() => {
            console.log("print");
            _exportPdf();
          }}
        />
      ) : (
        null
      )}
      <p className="dont-be-a-slave">don't be a slave who adapt to the government</p>
    </div>
  );
}

import React from 'react'
import ioc from "../src/assets/ioc.png";
import pae from "../src/assets/PaE.png";
import placeholder from "../src/assets/ph.png";
import ceypetco from "../src/assets/ceypetco.png";

export default function Card(props) {
  return (
    <div className="fuel-card" id="print-me">
    <div className="fuel-logo_container">
      <div className="fuel-logo">
        <img src={pae} alt="" className="fuel-logo_image" />
      </div>
      <div className="fuel-logo">
        <img src={ioc} alt="" className="fuel-logo_image" />
      </div>
      <div className="fuel-logo">
        <img src={ceypetco} alt="" className="fuel-logo_image" />
      </div>
    </div>
    <div className="fuel-title">national Fuel pass</div>
    <input
      type="file"
      className="hide-me"
      ref={props.inpRef}
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
        //   setImage(file);
        //   setImage(file);
          props.image(file)
          // console.log(file);
        } else {
        //   setImage(null);
        props.image={}
        }
      }}
    /> 
    <div
      className="fuel-qr_img"
      onClick={(e) => {
        e.preventDefault();
        props.inpRef.current.click();
      }}
    >
      <img
        src={props.pre ? props.pre : placeholder}
        alt=""
        className="qr-image"
        accept="image/*"
      />
    </div>
  </div>
  )
}

import React from "react";
import styles from "./Modal.module.scss";

export const Modal = (props) => {
  return (
    <div className={styles.modalWrapper}>
      <div className="container">
        <div className="row justify-content-end mb-5" onClick={props.onClick}>
          <span className={styles.close}>&#x02A2F;</span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a href="">Link to some where?</a>
          </div>
          <div className="col-md-8">
            <img src={props.img} srcSet={`${props.img2x} 2x`} alt="alt text" />
          </div>
        </div>
      </div>
    </div>
  );
};

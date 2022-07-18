import React from "react";
import styles from "./MoreWork.module.scss";

const MoreWork = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>More Of My Work</h2>
            <p className="subheading">UI/UX and Marketing</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img
              src="/images/more-work/cinic-more-work-placeholder.png"
              srcSet=""
            />
          </div>
          <div className="col-3">
            <img
              src="/images/more-work/cinic-more-work-placeholder.png"
              srcSet=""
            />
          </div>
          <div className="col-3">
            <img
              src="/images/more-work/cinic-more-work-placeholder.png"
              srcSet=""
            />
          </div>
          <div className="col-3">
            <img
              src="/images/more-work/cinic-more-work-placeholder.png"
              srcSet=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWork;

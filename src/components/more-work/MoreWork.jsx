import React, { useState } from "react";
import styles from "./MoreWork.module.scss";
import { Modal } from "../modal/Modal";

const MoreWork = () => {
  const [viewModal, setViewModal] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.headerWrapper}`}>
            <h2>More Of My Work</h2>
            <p className="subheading">UI/UX and Marketing</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className={styles.moreLink} onClick={() => setViewModal(1)}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
            {viewModal == 1 && (
              <Modal
                title="Here is the title"
                text="Here is the text about the item. It goes here!"
                onClick={() => setViewModal(0)}
              />
            )}
          </div>
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className={styles.moreLink}>
              <img
                src="/images/more-work/cinic-more-work-placeholder.png"
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWork;

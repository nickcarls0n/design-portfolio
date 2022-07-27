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
        <div className="row py-3">
          <div className="col-md-4" onClick={() => setViewModal(1)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\mailkeeper-web-mockup.jpg"
                srcSet="\images\more-work\mailkeeper-web-mockup@2x.jpg"
              />
            </div>
          </div>
          {viewModal == 1 && (
            <Modal
              title="Mailkeeper Website Design"
              text="While I was working with the team at Qualarc the company acquired the Mailkeeper line. Mailkeeper had a limited branding and a very outdated website. I was tasked with updating the old site while maintaining the original branding. I used Adobe XD for the design and created a simple brochure style site using HTML/css, javaScript and Bootstrap."
              img="\images\more-work\mailkeeper-web-full.jpg"
              img2x="\images\more-work\mailkeeper-web-full@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4" onClick={() => setViewModal(2)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\trainer-road-calculator.jpg"
                srcSet="\images\more-work\trainer-road-calculator@2x.jpg"
              />
            </div>
          </div>
          {viewModal == 2 && (
            <Modal
              title="TrainerRoad Calculator"
              text="While I was working with the team at Qualarc the company acquired the Mailkeeper line. Mailkeeper had a limited branding and a very outdated website. I was tasked with updating the old site while maintaining the original branding. I used Adobe XD for the design and created a simple brochure style site using HTML/css, javaScript and Bootstrap."
              img="\images\more-work\mailkeeper-web-full.jpg"
              img2x="\images\more-work\mailkeeper-web-full@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4" onClick={() => setViewModal(3)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\prestige-plaques-Mockup.jpg"
                srcSet="\images\more-work\prestige-plaques-Mockup@2x.jpg 2x"
              />
            </div>
          </div>
          {viewModal == 3 && (
            <Modal
              title="Prestige Plaques Logo & Web Design"
              text="This projects included logo and web a design and implementation of a website where users can select from a number of product options and make a purchase. I used Adobe xd for the design portion and created a custom e-commerce WordPress template using sass and php."
              img="\images\more-work\prestige-plaques-web-full.jpg"
              img2x="\images\more-work\prestige-plaques-web-full@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
        </div>
        <div className="row py-3">
          <div className="col-md-4" onClick={() => setViewModal(4)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\fight-card-thumb.jpg"
                srcSet="\images\more-work\fight-card-thumb@2x.jpg"
              />
            </div>
          </div>
          {viewModal == 4 && (
            <Modal
              title="Facebook Marketing"
              text="While I was working with the team at Qualarc the company acquired the Mailkeeper line. Mailkeeper had a limited branding and a very outdated website. I was tasked with updating the old site while maintaining the original branding. I used Adobe XD for the design and created a simple brochure style site using HTML/css, javaScript and Bootstrap."
              img="\images\more-work\fight-card.jpg"
              img2x="\images\more-work\fight-card@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4" onClick={() => setViewModal(5)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\Hang-Ten-Mock-up.jpg"
                srcSet="\images\more-work\Hang-Ten-Mock-up@2x.jpg 2x"
              />
            </div>
          </div>
          {viewModal == 5 && (
            <Modal
              title="Facebook Marketing"
              text="While I was working with the team at Qualarc the company acquired the Mailkeeper line. Mailkeeper had a limited branding and a very outdated website. I was tasked with updating the old site while maintaining the original branding. I used Adobe XD for the design and created a simple brochure style site using HTML/css, javaScript and Bootstrap."
              img="\images\more-work\fight-card.jpg"
              img2x="\images\more-work\fight-card@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4" onClick={() => setViewModal(6)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\cha-light-ad-thumb.jpg"
                srcSet="\images\more-work\cha-light-ad-thumb@2x.jpg 2x"
              />
            </div>
          </div>
          {viewModal == 6 && (
            <Modal
              title="CHA Facebook Marketing"
              text="This was part of a larger marketing push to create assets that would generate traffic to the companies e-commerce site."
              img="\images\more-work\cha-light-ad.jpg"
              img2x="\images\more-work\cha-light-ad@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
        </div>
        <div className="row py-3">
          <div className="col-md-4" onClick={() => setViewModal(7)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\cha-email-mockup-thumb.jpg"
                srcSet="\images\more-work\cha-email-mockup.jpg 2x"
              />
            </div>
          </div>
          {viewModal == 7 && (
            <Modal
              title="Facebook Marketing"
              text="While I was working with the team at Qualarc the company acquired the Mailkeeper line. Mailkeeper had a limited branding and a very outdated website. I was tasked with updating the old site while maintaining the original branding. I used Adobe XD for the design and created a simple brochure style site using HTML/css, javaScript and Bootstrap."
              img="\images\more-work\fight-card.jpg"
              img2x="\images\more-work\fight-card@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4" onClick={() => setViewModal(8)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\winfield-banner-thumb.png"
                srcSet="\images\more-work\winfield-banner.png 2x"
              />
            </div>
          </div>
          {viewModal == 8 && (
            <Modal
              title="Facebook Marketing"
              text="While I was working with the team at Qualarc the company acquired the Mailkeeper line. Mailkeeper had a limited branding and a very outdated website. I was tasked with updating the old site while maintaining the original branding. I used Adobe XD for the design and created a simple brochure style site using HTML/css, javaScript and Bootstrap."
              img="\images\more-work\fight-card.jpg"
              img2x="\images\more-work\fight-card@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreWork;

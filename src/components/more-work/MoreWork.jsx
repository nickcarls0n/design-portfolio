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
        <div className="row py-md-3">
          <div className="col-md-4 mb-3" onClick={() => setViewModal(1)}>
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
          <div className="col-md-4 mb-3" onClick={() => setViewModal(2)}>
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
              text="Working on the TrainerRoad marketing team, we were trying to create more interaction on the marketing site. I came up with the idea for a calculator that athletes could enter their cycling performance information and compar it to other athletes in the TrainerRoad system. The design was created with style components in Figma, and implemented in React.js"
              img="\images\more-work\watts-kg-calculator.jpg"
              img2x="\images\more-work\watts-kg-calculator@2x.jpg 2x"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4 mb-3" onClick={() => setViewModal(3)}>
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
        <div className="row py-md-3">
          <div className="col-md-4 mb-3" onClick={() => setViewModal(4)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\fight-card-thumb.jpg"
                srcSet="\images\more-work\fight-card-thumb@2x.jpg"
              />
            </div>
          </div>
          {viewModal == 4 && (
            <Modal
              title="Social Media Marketing"
              text="Social media for events and event based companies can be a great tool to generate engagement. This is a fun project that I worked on to promote a Ju Jitsu tournament. I did the photography work and PhotoShop creation of this Facebook banner. "
              img="\images\more-work\fight-card.jpg"
              img2x="\images\more-work\fight-card@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4 mb-3" onClick={() => setViewModal(5)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\Hang-Ten-Mock-up.jpg"
                srcSet="\images\more-work\Hang-Ten-Mock-up@2x.jpg 2x"
              />
            </div>
          </div>
          {viewModal == 5 && (
            <Modal
              title="Hang Ten Website Revamp"
              text="Hang Ten is a seafood restaurant in the Bay Area, they had a terribly out-dated website that way not connecting with customers. I worked on this project a number of years ago, so the design was done in PhotoShop and the implementation was done in vanilla HTML/css with a sprinkling of javaScript. The new site now includes location, the complete menu and catering information which were not included on the old site."
              img2x="\images\more-work\hang-ten-menue@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4 mb-3" onClick={() => setViewModal(6)}>
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
              text="Custom Home Accessories had recently expanded their product offering to include outdoor lighting. It was important to let potential customers know about the new lighting offerings. This banner was part of a larger marketing push to engage with clients that might be interested in outdoor lighting."
              img="\images\more-work\cha-light-ad.jpg"
              img2x="\images\more-work\cha-light-ad@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
        </div>
        <div className="row py-md-3">
          <div className="col-md-4 mb-3" onClick={() => setViewModal(7)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\cha-email-mockup-thumb.jpg"
                srcSet="\images\more-work\cha-email-mockup.jpg 2x"
              />
            </div>
          </div>
          {viewModal == 7 && (
            <Modal
              title="Email Marketing"
              text="While working for Custom Home Accessories email marketing was an important part of of customer engagement. I was tasked with not only all email design, but also email creation and maintaining our MailChimp account. During the 4 years I was with the company I was able to move the creation from vanilla HTML to Foundation for email, which made the process of email creation much easier and faster."
              img="\images\more-work\Branded-Plaques-Email-Mockup-2.jpg"
              img2x="\images\more-work\Branded-Plaques-Email-Mockup-2@2x.jpg"
              onClick={() => setViewModal(0)}
            />
          )}
          <div className="col-md-4  mb-3" onClick={() => setViewModal(8)}>
            <div className={styles.moreLink}>
              <img
                src="\images\more-work\winfield-banner-thumb.png"
                srcSet="\images\more-work\winfield-banner.png 2x"
              />
            </div>
          </div>
          {viewModal == 8 && (
            <Modal
              title="Qualarc Advertising"
              text="While I was working with the team at Qualarc the company was constantly expanding their product offering. This was my duty to not only photograph the new products, but also find ways to effectively market the new products. This was a banner I created for a very effective Facebook campaign to introduce the Winfield line of mailboxes."
              img="\images\more-work\winfield-banner.png"
              img2x="\images\more-work\winfield-banner@2x.png"
              onClick={() => setViewModal(0)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreWork;

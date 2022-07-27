import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styles from "../styles/Case.module.scss";

const Cha = () => {
  return (
    <>
      <Navbar />
      <div className={styles.caseWrapper}>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <h1>Custom Home & Accessories</h1>
              <p className="subheading">Site Design and Marketing</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h2>The Challenge</h2>
              <p>
                Commercial & Home Accessories, an online retailer of mailbox,
                street signs and outdoor home items, needed a way to inform and
                advertise their expanding installation services to Northern
                California clients. The company also needed me to design and
                develop a series of email marketing campaigns. PLEASE NOTE: I am
                no longer maintaining this site and there maybe changes from the
                images on this page.
              </p>
              <div className="d-flex flex-column">
                <a href="https://mailboxspecialties.com/" target="_blank">
                  Live Site &gt;
                </a>
              </div>
            </div>
            <div className="col-md-7 position-relative">
              <img
                src="\images\cha\cha-web-mockup.jpg"
                srcSet="\images\cha\cha-web-mockup@2x.jpg 2x"
                alt="Cinic web mockup"
              />
              <img
                src="\images\cha\cha-phone-mockup.png"
                srcSet="\images\cha\cha-phone-mockup@2x.png 2x"
                alt="Cinic phone mockup"
                className={styles.phone}
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h3>Style</h3>
              <p>
                As an existing e-retailer, Commercial & Home Accessories had a
                number of established style points that needed to be adhered to.
                In designing the website I needed to create a site that is
                visually appealing and showcases the high level of quality that
                Commercial & Home Accessories is known for. I worked directly
                with the owner to come up with a number of design iterations
                that fit the company needs. Important considerations included a
                list of services, an image gallery of completed work as well as
                a frequent asked question page. Developing the site I chose to
                not use a CMS in order to avoid maintenance cost and security
                issues that come with using a CMS. I was able to develop a fast
                performing application that is easily searched.
              </p>
            </div>
            <div className="col-md-7">
              <img
                src="\images\cha\cha-style.jpg"
                srcSet="\images\cha\cha-style@2x.jpg 2x"
                alt="Cinic style guide"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h3>Design Tools</h3>
              <ul>
                <li>Adobe PhotoShop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe AfterEffects</li>
                <li>Adobe Premiere</li>
                <li>HTML/css</li>
              </ul>
            </div>
            <div className="col-md-7">
              <img
                src="\images\cha\cha-wireframe.png"
                srcSet="\images\cinic\cinic-case-study@2x.png 2x"
                alt="Cinic style guide"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>Email Marketing</h3>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <img
                src="\images\cha\t4-email-blast.jpg"
                alt="Cha t4 mailbox email design"
              />
            </div>
            <div className="col-md-4">
              <img
                src="\images\cha\plaque-email.jpg"
                alt="Cha plaque email design"
              />
            </div>
            <div className="col-md-4">
              <img
                src="\images\cha\catalog-email.jpg"
                alt="Cha catalog release email design"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cha;

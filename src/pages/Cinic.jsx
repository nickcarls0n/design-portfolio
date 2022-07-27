import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styles from "../styles/Case.module.scss";

const Cinic = () => {
  return (
    <>
      <Navbar />
      <div className={styles.caseWrapper}>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <h1>Cinic Bike Gear</h1>
              <p className="subheading">Brand Identity and Site Design</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h2>The Challenge</h2>
              <p>
                Cinic Bike Gear is a small mountain bike start up with ambitions
                to grow big. The brand needed a logo, web and ecommerce platform
                as well as printed material and apparel designs.
              </p>
              <div className="d-flex flex-column">
                <a href="https://cinicbikegear.com/" target="_blank">
                  Live Site &gt;
                </a>
                <a href="https://github.com/nickcarls0n/Cinic" target="_blank">
                  GitHub &gt;
                </a>
              </div>
            </div>
            <div className="col-md-7 position-relative">
              <img
                src="images/cinic/cinic-web-mockup.jpg"
                alt="Cinic web mockup"
              />
              <img
                src="images/cinic/cinic-phone-mockup.png"
                alt="Cinic phone mockup"
                className={styles.phone}
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h3>Logo and Style</h3>
              <p>
                After researching the current mountain biking industries as well
                as a range of action sports such as motocross and skate
                boarding. I designed a number of logo iterations that were
                narrowed down to a single logo type that would be fitting on a
                wide range of products. I also came up with a color pallet that
                could be used online as well as on the first season of apparel.
              </p>
            </div>
            <div className="col-md-7">
              <img
                src="images/cinic/cinic-style-guide.png"
                alt="Cinic style guide"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h3>UI/UX</h3>
              <p>
                As a small startup Cinic needed an online store that would be
                give them room for product growth as well as offer the ability
                to become an information hub for the company. I built a custom
                theme for WordPress. I am using a plugin to handle the
                transaction and I have included a blog section that is linked to
                Cinic’s social media for product updates for a one stop
                marketing hub.
              </p>
              <h3>Tools</h3>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe AfterEffects</li>
                <li>Wordpress/PHP</li>
                <li>HTML/css</li>
              </ul>
            </div>
            <div className="col-md-7">
              <img
                src="images/cinic/cinic-wire-frame.jpg"
                alt="Cinic style guide"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="images/cinic/Cinic-youtube-placeholder.png" alt="" />
            </div>
            <div className="col-md-6">
              <img src="images/cinic/disobey-shirt-fb-ad.jpg" alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cinic;

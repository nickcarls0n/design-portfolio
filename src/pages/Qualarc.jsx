import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styles from "../styles/Case.module.scss";

const Qualarc = () => {
  return (
    <>
      <Navbar />
      <div className={styles.caseWrapper}>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <h1>Qualarc Manufacturing</h1>
              <p className="subheading">Brand Identity and Site Design</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h2>The Challenge</h2>
              <p>
                When I joined the QualArc team I found a very out dated website,
                dated product photos and marketing material. The company needed
                a marketing facelift that would bring it’s product offering
                update without losing the brand awareness that the owner had
                built. PLEASE NOTE: I am no longer maintaining this site and
                there maybe changes from the images on this page.
              </p>
              <div className="d-flex flex-column">
                <a href="https://qualarc.com/" target="_blank">
                  Live Site &gt;
                </a>
              </div>
            </div>
            <div className="col-md-7 position-relative">
              <img
                src="images/qualarc\Qualarc-Desktop-Full-Screenshot.jpg"
                alt="Cinic web mockup"
              />
              <img
                src="images\qualarc\Qualarc-IPhone-Mockup.png"
                alt="Cinic phone mockup"
                className={styles.phone}
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5">
              <h3>The Website</h3>
              <p>
                QualArc.com had not been updated in at least a decade. The
                original site was little more than an online brochure that had a
                list of product images and descriptions. My challenge was to
                create a mobile friendly e-commerce platform that would showcase
                a wide variety of products while offering an easy to navigate
                interface with a seamless flow from product selection to
                checkout.
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
                Researching QualArc’s client base I found a wide variety of
                clientele, which made finding a specific audience difficult. The
                metrics for the original QualArc site showed most users accessed
                the site from a desktop device, but this may have more to do
                with the old site being totally unusable on a mobile device. I
                set out designing a site that used widely accepted design norms
                for both desktop and mobile devices as to not alienate any user
                group. The color pallet and typography I chose are understated
                in an effort to optimize readability while also not detracting
                from the product images. I chose to organize products and
                product categories according to product usage, this allows for
                intuitive navigation while also allowing for an expanding
                product line.
              </p>
              <h3>Tools</h3>
              <ul>
                <li>Adobe PhotoShop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe AfterEffects</li>
                <li>Adobe Premiere</li>
                <li>Wordpress/PHP</li>
                <li>HTML/css</li>
              </ul>
            </div>
            <div className="col-md-7">
              <img
                src="images\qualarc\Qualarc-re-do-sitemap.jpg"
                alt="Cinic style guide"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Qualarc;

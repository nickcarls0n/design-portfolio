import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styles from "../styles/About.module.scss";
import Contact from "../components/contact/Contact";

const About = () => {
  return (
    <>
      <Navbar page="about" />
      <div className={styles.wrap}>
        <div className={`container ${styles.about}`}>
          <div className="row">
            <div className="col-md-6">
              <h1>About Me</h1>
              <p className="subheading">UI/UX Design and Development</p>
              <p>
                I'm Nick Carlson, a California based front-end developer and
                designer. For over 6 years I have been involved in and lead
                projects in user interface design, web application development,
                e-commerce design and implementation as well as creative
                direction and planning.
              </p>
              <p>
                When I am not in front of a computer you can find me in th
                outdoors or painting. I also have a brown belt in Brazilian Jiu
                Jitsu.
              </p>
            </div>
            <div className="col-md-6">
              <img src="images/headshot.jpg" alt="head shot" />
            </div>
          </div>
        </div>
        <div className={styles.education}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h3>Education</h3>
                <p>
                  I have a Bachelor of Arts degree in art and design from
                  California State East Bay. The design curriculum included
                  studies in web design and front-end development. Since
                  graduating I have continued learning and keep my skills sharp
                  and up to date with resources such as Free Code Camp, LinkedIn
                  learning and Treehouse.
                </p>
              </div>
              <div className="col-md-6">
                <h3>Tools</h3>
                <div className="row">
                  <div className="col-6">
                    <p className="subheading">Design</p>
                    <ul>
                      <li>Adobe PhotoShop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe XD</li>
                      <li>Adobe InDesign</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <p className="subheading">Development</p>
                    <ul>
                      <li>HTML/css</li>
                      <li>PHP/Wordpress</li>
                      <li>javaScript</li>
                      <li>React.js</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default About;

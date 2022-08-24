import React from "react";
import styles from "./Contact.module.scss";
import { SubmitButton } from "../button/Button";

const Contact = () => {
  return (
    <div className={`container ${styles.contact}`}>
      <div className="row">
        <div className="col-lg-6">
          <h2>Contact Me</h2>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvSKii47RBrkk2wV-PswPqKk3ZqiJR7jWtaS_sq3ESmZdfeA/formResponse"
            method="post"
          >
            <label htmlFor="entry.1630247408">Name</label>
            <input
              type="text"
              id="name"
              name="entry.1630247408"
              placeholder="Your Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="entry.1807431491"
              placeholder="Your Email"
              required
            />
            <label htmlFor="message">Add a Message</label>
            <textarea id="message" name="entry.314039078" rows={5} required />
            <SubmitButton>Submit</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

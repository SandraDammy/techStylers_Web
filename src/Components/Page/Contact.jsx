import React from "react";
import style from "../Style/contact.module.css";
import { IoAddOutline } from "react-icons/io5";
import Button from "../Common/Button";

const Contact = () => {
  const btnSubmit = () => {
    console.log("Event clicked!");
  };
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.textOverlay}>
          <h1>Contact Us </h1>
          <p>
            Have a question or need assistance? Reach out to us, and we will be
            glad to help!
          </p>
        </div>
      </div>
      <div className={style.formContainer}>
        <div className={style.textContainer}>
          <h1>Get In Touch</h1>
          <p>
            Let's connect! Whether you have feedback, inquiries, or just want to
            say hello, don't hesitate to get in touch with us. We're eager to
            hear from you.
          </p>
        </div>
        <form>
          <div className={style.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="8"></textarea>
          </div>
          <div className={style.submit}>
            <Button
              className={"btnPry"}
              title={"Send Message"}
              btnEventHandler={btnSubmit}
            />
          </div>
        </form>
      </div>
      <section className={style.formText}>
        <div className={style.textContainer}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Our FAQs provide concise answers to help streamline your experience
            and address any uncertainties you may have.
          </p>
        </div>
        <div className={style.questionContainer}>
          <div className={style.question}>
            <div>
              <p>How Can I be a member of techStylers</p>
              <IoAddOutline className={style.plusSign} />
            </div>
            <hr />
          </div>
          <div className={style.question}>
            <div>
            <p>How Can I be a member of techStylers</p>
              <IoAddOutline className={style.plusSign} />
            </div>
            <hr />
          </div>
          <div className={style.question}>
            <div>
            <p>How Can I be a member of techStylers</p>
              <IoAddOutline className={style.plusSign} />
            </div>
            <hr />
          </div>
          <div className={style.question}>
            <div>
            <p>How Can I be a member of techStylers</p>
              <IoAddOutline className={style.plusSign} />
            </div>
            <hr />
          </div>
          <div className={style.question}>
            <div>
            <p>How Can I be a member of techStylers</p>
              <IoAddOutline className={style.plusSign} />
            </div>
            <hr />
          </div>
          <div className={style.question}>
            <div>
            <p>How Can I be a member of techStylers</p>
              <IoAddOutline className={style.plusSign} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

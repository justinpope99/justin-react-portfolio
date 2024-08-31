import { getImageURL } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer>
      <div id="contact" className={styles.anchor} />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/home.png")}
              alt="Location icon"
              width="50px"
            />
            <a>New York City</a>
          </li>
          <li className={styles.link}>
            <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:justinmps12@gmail.com">justinmps12@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/justin-pope-2a040a102/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/githubIcon.png")}
              alt="GitHub icon"
            />
            <a href="https://github.com/justinpope99" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;

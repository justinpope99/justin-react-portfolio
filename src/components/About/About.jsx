/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <div id="about" className={styles.anchor} />
      <h2 className={styles.title}>About Me</h2>
      {/* About Section */}
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-user bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>My Background</h3>
            <p>
              {" "}
              I'm a senior at New York City College of Technology pursuing a
              Bachelor's Degree in Computer Systems. I've been passionate about
              computers since I was 14, which is when I received my first gaming
              PC. Before I picked one out, I did a lot of research to find out
              which components I should choose, and that's when I realized I
              have a passion for technology.
              <br />
              <br />
              I started regularly watching Tech Content Creators and frequenting
              Tech forums. Since then, I have built 3 additional computers,
              including an Ethereum mining rig. Eventually, I also became
              passionate about software development because of my love of video
              games and my desire to find out how they are created and how they
              work. That's why I decided to major in Computer Systems.
              <br />
              <br />
              My degree focuses on Software Development and Web Development.
              I've learned multiple programming languages such as Java, C#,
              Python, JavaScript, and PHP. I've also learned about Software
              Design, Flowcharts, and UML. Additionally, I have a solid
              foundation in Data Structures and Algorithms, as well as Discrete
              Mathematics.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxl-spring-boot bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
            <p>
              {" "}
              I'm an Entry level Full Stack Developer with experience in Java,
              JavaScript, TypeScript, Bootstrap, and REST APIs. I also have
              experience working with JavaScript frameworks such as React and
              Angular. Additionally, I have proficiency with SQL, database
              design, data modeling, and database implementation. I have
              developed my own web services using Spring Boot, and deployed them
              using Docker. I have also deployed web applications using GitHub
              pages, and Vercel.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxl-react bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>ReactJS Developer</h3>
            <p>
              I have built and deployed multiple responsive React Applications
              using JavaScript and TypeScript. I have experience using component
              libraries for React such as Material UI and Chakra UI. I have used
              Node.js to create React projects using Vite, and install
              dependencies. I've used routing to have apps with multiple pages,
              and I've integrated APIs and services into React applications.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxl-java bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>Java Developer</h3>
            <p>
              I have developed multiple event-driven applications in Java, Java
              FX, and Java Server Pages using the JDBC API to interact with
              databases. I am also familiar with using the Eclipse and IntelliJ
              IDEs for Java Development. I have used Java to make my own API
              using the Spring Boot framework and MongoDB for the database. I
              set up my own endpoints, REST controllers, services, and
              configured CORS. Finally, I deployed my API to Koyeb, using a
              Dockerfile to build a container image. I also have a strong
              foundation in Object-Oriented Programming, and Data Structures and
              Algorithms.
            </p>
          </div>
        </li>
        {/* Education Section */}
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-graduation bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3 className={styles.educationTitle}>Education</h3>
            <div className={styles.educationList}>
              <ul>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxs-school"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      CUNY New York City College of Technology
                    </div>
                  </div>
                </li>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxl-java"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      Bachelor of Technology in Computer Systems
                    </div>
                  </div>
                </li>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxs-calendar"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      June 2025
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* Resume Section */}
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-file bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>Resume</h3>
            <div className={styles.resumeLink}>
              <a href="/Justin_Pope_Resume.pdf" target="_blank">
                Justin_Pope_Resume.pdf
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;

import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resume from "../assets/files/RESUME_Naphat.pdf";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>

                  <p>
                    Hello! My name is <b>Naphat</b>. I am interested in
                    technology, AI and software development. I enjoy building
                    creative projects such as web applications and
                    experimental tech ideas.
                  </p>

                  <p>
                    I am interested in technology and software
                    development. I enjoy building web applications and learning
                    new technologies.
                  </p>

                  <div className="about-buttons">
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-btn"
                    >
                      Resume
                    </a>

                    <a
                      href="src/assets/files/TRANSCRIPT_Naphat.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-btn"
                    >
                      Transcript
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="about-card">
                    <h4>Quick Info</h4>

                    <p>📍 Thailand</p>
                    <p>💻 Interested in AI & Development</p>
                    <p>🚀 Passionate about building new things</p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

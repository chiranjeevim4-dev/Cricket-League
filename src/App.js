import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Table } from "react-bootstrap";
import { motion } from "framer-motion";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/unnamed.png"
              alt="League Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
              <Nav.Link
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="overlay"></div>
        <motion.div
          className="hero-content text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="fw-bold display-4 text-white">
            South India T10 Cricket Association
          </h1>
          <p className="lead text-light">
            Where Passion Meets Perfection in Every Over
          </p>
          <motion.a
            href="#about"
            className="btn btn-danger px-4 py-2 mt-3"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleSmoothScroll(e, "#about")}
          >
            Explore More
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section position-relative py-5">
        <div className="about-bg"></div>
        <div className="about-overlay"></div>
        <Container className="position-relative text-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-4">
              <motion.h2
                className="about-heading fw-bolder mb-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                About the Association
              </motion.h2>
              <motion.div
                className="underline"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{
                  scaleX: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0 }}
              ></motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="about-content p-4 rounded shadow-lg"
            >
              <h5>
                <strong>Name of the Society:</strong>
              </h5>
              <p>South India T10 Cricket Association (SITCA)</p>

              <h5>
                <strong>Jurisdiction:</strong>
              </h5>
              <p>
                Tamil Nadu State under the Tamil Nadu Societies Registration
                Act, 1975.
              </p>

              <h5>
                <strong>Objectives of the Association:</strong>
              </h5>
              <ul className="objectives-list">
                <li>
                  To promote and develop the game of T10 cricket in Tamil Nadu
                  and other South Indian states.
                </li>
                <li>
                  To organize and conduct T10 cricket tournaments, coaching
                  camps, and training programs for players.
                </li>
                <li>
                  To encourage sportsmanship, discipline, and teamwork among
                  players and officials.
                </li>
                <li>
                  To provide a platform for rural and urban cricketers to
                  showcase their talent.
                </li>
                <li>
                  To collaborate with government and private institutions for
                  cricket development programs.
                </li>
              </ul>

              <p>
                <strong>The Association shall be a non-profit organization</strong>{" "}
                operating for the development of cricket without any commercial
                intent.
              </p>

              <div className="mt-5">
                <motion.h5
                  className="executive-heading text-light fw-bold mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  Executive Committee
                </motion.h5>
                <motion.div
                  className="underline-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{
                    scaleX: 1,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                ></motion.div>

                <Table striped bordered hover responsive variant="dark" className="mt-3">
                  <thead className="table-dark">
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>District</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="highlight-name">George Stephen</td>
                      <td>President</td>
                      <td>Coimbatore</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="highlight-name">Aravinthan</td>
                      <td>Secretary</td>
                      <td>Coimbatore</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="highlight-name">Dhanush Kumar</td>
                      <td>Treasurer</td>
                      <td>Coimbatore</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="highlight-name">Dilip Kumar</td>
                      <td>Member</td>
                      <td>Coimbatore</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="highlight-name">Sridevi</td>
                      <td>Member</td>
                      <td>Coimbatore</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="highlight-name">Vijesh</td>
                      <td>Member</td>
                      <td>Coimbatore</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="highlight-name">Ranjith</td>
                      <td>Member</td>
                      <td>Coimbatore</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section text-center py-5">
        <Container>
          <motion.h2
            className="text-danger fw-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h2>
          <p>Email: info@sitca.com</p>
          <p>
            Address: 93J, 3rd Floor, Veera Towers, Krishnaswamy Mudaliyar Road,
            R.S. Puram, Coimbatore – 641018.
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 border-top bg-dark text-light">
        <p className="mb-0">
          © 2025 South India T10 Cricket Association. All Rights Reserved.
        </p>
      </footer>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

        body {
          background-color: #0b0b0b;
          color: #eaeaea;
          font-family: 'Montserrat', sans-serif;
          scroll-behavior: smooth;
        }

        .custom-navbar {
          background: transparent;
          transition: all 0.4s ease;
        }

        .custom-navbar.scrolled {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(217, 4, 41, 0.3);
        }

        .nav-link {
          color: #eaeaea !important;
          margin: 0 10px;
          font-weight: 500;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #d90429 !important;
        }

        .logo {
          height: 55px;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.3));
        }

        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url('https://png.pngtree.com/background/20250110/original/pngtree-evening-cricket-stadium-panorama-with-spectacular-lighting-picture-image_15952382.jpg') 
            no-repeat center center/cover;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .about-section {
          position: relative;
          overflow: hidden;
          background-color: #111;
        }

        .about-bg {
          background: url('/images/Aboutsecimg1.png') no-repeat center center/cover;
          background-attachment: fixed;
          filter: brightness(60%);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .about-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .about-content {
          position: relative;
          z-index: 2;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(217, 4, 41, 0.3);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 0 25px rgba(217, 4, 41, 0.2);
        }

        .about-heading {
          font-size: 2.8rem;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          color: #fff;
        }

        .underline,
        .underline-sm {
          height: 3px;
          background: #d90429;
          width: 100px;
          margin: 0 auto;
          border-radius: 2px;
          box-shadow: 0 0 12px #d90429;
          transform-origin: center;
          opacity: 0;
        }

        .underline-sm {
          width: 60px;
          box-shadow: 0 0 8px #d90429;
        }

        .highlight-name {
          color: #ffd700;
          font-weight: 600;
        }

        .contact-section {
          background: linear-gradient(180deg, #0b0b0b, #1a0000);
          color: #eaeaea;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 768px) {
          .about-heading {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  useEffect(() => {
    const Nav = document.querySelector(".navbar");
    const Brand = document.querySelector(".brand");
    const Hamburger = document.querySelector(".icon-menu");
    const LinksContainer = document.querySelector(".links-container");
    const Links = document.querySelectorAll(".links");
    const OuterModal = document.querySelector(".outer-model");
    //Sets navbar style transparent
    const turnTansparent = () => {
      // Navbar
      Nav.style.backgroundColor = "transparent";
      // Brand
      Brand.style.color = "black"
      // Links
      Links.forEach((link) => {
        link.classList.remove("links-solid");
        link.classList.add("links-transparent");
      });
    };
    //Sets background style solid
    const showBackground = () => {
      // Navbar
      Nav.style.backgroundColor = "white";
      // Brand
      Brand.style.color = "black";
      // Hamburger
      Hamburger.style.color = "black";
      // Links
      Links.forEach((link) => {
        link.classList.remove("links-transparent");
        link.classList.add("links-solid");
      });
    };
    // EventListener
    // checks wether the user has scrolled down the home page
    window.onscroll = function () {
      window.pageYOffset < 10 ? turnTansparent() : showBackground();
    };
    // Click outside model to hide nav
    OuterModal.addEventListener("click", (event) => {
      const IsOuterModel = event.target.classList.contains("outer-model");
      if (IsOuterModel) {
        LinksContainer.style.right = "-20rem";
        OuterModal.style.opacity = "0";
        OuterModal.style.pointerEvents = "none";
      }
    });
    Hamburger.addEventListener("click", () => {
      LinksContainer.style.right = "0rem";
      OuterModal.style.opacity = "1";
      OuterModal.style.pointerEvents = "all";
    });
  });
  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <Link className="brand" to="/">
            P'Unity
          </Link>
        </div>
        <div className="hamburger">
          <span className="icon-menu h1"></span>
        </div>
        <div className="outer-model"></div>
        <div className="links-container">
          <a className="links links-transparent" href="/#features">
            Features
          </a>
          <a className="links links-transparent" href="/#pricing">
            Pricing
          </a>
          <Link className="links links-transparent" to="/questions/ask">
            Ask a Question
          </Link>
          <Link className="links links-transparent" to="/questions">
            Latest Questions
          </Link>
          <Link className="links links-transparent" to="/">
            Login
          </Link>
          <a className="links links-transparent" href="/#contact">
            Contact
          </a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          min-height: 5rem;
          display: flex;
          justify-content: center;
          position: fixed;
          transition: background 0.2s ease;
          z-index: 10;
        }
        .hamburger {
          display: none;
        }
        .icon-menu {
          color: black;
        }
        .brand,
        .brand:hover {
          margin: 0rem 1rem;
          font-size: 1.5rem;
          color: black;
        }
        .links-container {
          display: flex;
          flex-direction: row;
          jsutify-content: center;
        }
        .links {
          margin: 0rem 0.8rem;
        }

        .links-transparent {
          color: black;
        }
        .links-transparent:hover {
          color: #fab95b;
        }
        .links-solid {
          color: black;
        }
        .links-solid:hover {
          color: #fab95b;
        }

        @media (max-width: 800px) {
          .hamburger,
          .hamburger:hover {
            position: fixed;
            right: 2rem;
            top: 1.2rem;
            display: block;
            cursor: pointer;
          }
          .links-container {
            position: absolute;
            padding: 2rem 1rem;
            height: 100vh;
            width: 20rem;
            right: -20rem;
            top: 0px;
            flex-direction: column;
            background-color: white;
            transition: right 0.2s;
          }
          .outer-model {
            display: grid;
            position: fixed;
            top: 0px;
            left: 0px;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            pointer-events: none;
          }
          .links {
            font-size: 1.4rem;
            margin: 0.5rem;
          }

          .links-transparent {
            color: black;
          }
          .links-transparent:hover {
            color: var(--primary-color);
          }
          .links-solid {
            color: black;
          }
          .links-solid:hover {
            color: var(--primary-color);
          }
        }
      `}</style>
    </div>
  );
}

export default NavigationBar;

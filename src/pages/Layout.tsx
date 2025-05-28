import { Link, NavLink, Outlet } from "react-router"
import { useState } from "react"; 
import "../styles/Layout.scss"

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return<>
      <header>
        <nav className="navbarContainer">
          <div className="logo">
            <NavLink to="/">
              <img src="/theKitchenLogo.png" alt="Logo" />
            </NavLink>
          </div>

          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className={`navbarLinks ${menuOpen ? "showMenu" : ""}`}>
            <div id="homeButton">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            </div>
            <div id="bookingButton">
              <NavLink to="/booking" onClick={() => setMenuOpen(false)}>Booking</NavLink>
            </div>
            <div id="contactButton">
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        </nav>
      </header>

        <main>
            <Outlet></Outlet>
        </main>

    <footer className="footerContainer">
      <div className="footerLinks">
        <p><Link to="/contact">Contact</Link></p>
        <p><Link to="/booking">Reserve Table</Link></p>
        <p><Link to="/admin">Admin</Link></p>
      </div>

      <div className="footerContact">
        <p>08-615 02 10</p>
        <p>
          <a href="mailto:contact@thekitchen.com" target="_blank" rel="noopener noreferrer">
            contact@thekitchen.com
          </a>
        </p>
        <p>
          <a href="https://maps.app.goo.gl/dMyxPGXmaRfUz59M9" target="_blank" rel="noopener noreferrer">
            Gustavslundsvägen 151 D <br /> 167 51 Bromma
          </a>
        </p>
      </div>

      <div className="footerSocials">
        <p>
          <i className="bi bi-instagram"></i>&nbsp;
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
        <p>
          <i className="bi bi-youtube"></i>&nbsp;
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </p>
        <p>
          <i className="bi bi-tiktok"></i>&nbsp;
          <a href="https://www.tiktok.com/foryou?lang=en" target="_blank" rel="noopener noreferrer">TikTok</a>
        </p>
      </div>

      <div className="footerMisc">
        <p>© The Kitchen 2025</p>
      </div>
    </footer>
    </>
}
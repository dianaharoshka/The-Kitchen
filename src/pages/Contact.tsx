import { NavLink } from "react-router"
import "../styles/_contact.scss";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          <strong>Phone:</strong> 08 123 123 00
        </p>
        <p>
          <strong>Email:</strong> contact@thekitchen.com
        </p>
        <p>
          <strong>Adress:</strong> Gustavslundsvägen 151 D<br />
          167 51 Bromma
        </p>
      </div>

      <h2>Opening Hours</h2>
      <div className="opening-hours">
        <p>
          <strong>Monday-Thursday:</strong> 17:00-00:00
        </p>
        <p>
          <strong>Friday:</strong> 17:00-01:00
        </p>
        <p>
          <strong>Saturday:</strong> 12:00-01:00
        </p>
        <p>
          <strong>Sunday:</strong> 17:00-23:00
        </p>
      </div>

      <NavLink to="/booking" className="book-table">
  Book A Table
</NavLink>    
</div>
  );
};

export default Contact;

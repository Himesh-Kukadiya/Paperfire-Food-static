import { menuItemsList } from '../Script/index'; // Adjust the path as necessary

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            {menuItemsList.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5 className="footer-title">Contact Info</h5>
                        <ul className="footer-contact-info">
                            <li><i className="fas fa-phone"></i> Phone: (XXX) XXX-XXXX</li>
                            <li><i className="fas fa-envelope"></i> Email: info@paperfirefood.com</li>
                            <li><i className="fas fa-map-marker-alt"></i> Address: [Insert Address]</li>
                            <li><i className="fas fa-clock"></i> Hours of Operation: Monday - Friday: 9 AM - 6 PM</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Paperfire Food. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

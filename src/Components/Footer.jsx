
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h5 className="footer-title">Paperfire Food</h5>
                        <p className="footer-description">Providing high-quality restaurant equipment for rental. We are
                            committed to supporting restaurant owners and chefs with reliable rental solutions.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="footer-title">Contact Info</h5>
                        <ul className="footer-contact-info">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, USA</li>
                            <li><i className="fas fa-phone"></i> (123) 456-7890</li>
                            <li><i className="fas fa-envelope"></i> info@paperfirefood.com</li>
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

export default Footer
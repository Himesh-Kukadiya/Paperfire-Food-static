
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <a className="navbar-brand" href="#">Paperfire Food</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#products">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Header
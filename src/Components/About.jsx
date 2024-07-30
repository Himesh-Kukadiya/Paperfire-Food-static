import {about} from '../Script/assets';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="section-title">About Us</h2>
                        <p className="section-description">At Paperfire Food, we provide top-quality restaurant equipment for
                            rental. Our diverse range of equipment is designed to help you run your restaurant smoothly and
                            efficiently.</p>
                        <p className="section-description">Our mission is to support restaurant owners and chefs by providing
                            reliable, high-quality rental equipment that meets all their needs. With our extensive
                            selection, you can find everything you need to create an exceptional dining experience.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={about} alt="About Us Image" className="img-fluid about-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
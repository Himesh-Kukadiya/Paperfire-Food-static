
const Service = () => {
    return (
        <section id="services" className="services-section">
        <div className="container">
            <h2 className="section-title text-center">Our Services</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="service-card">
                        <h3 className="service-title">Equipment Rental</h3>
                        <p className="service-description">{"We provide high-quality equipment rentals to suit your restaurant's needs."}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-card">
                        <h3 className="service-title">Delivery Services</h3>
                        <p className="service-description">Fast and reliable delivery service to ensure you receive your
                            equipment on time.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-card">
                        <h3 className="service-title">Support & Maintenance</h3>
                        <p className="service-description">Expert support and maintenance services for all your equipment
                            needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Service
import { testimonialsLsit } from "../Script/index";

const Testimonials = () => {
    // Split testimonials into chunks
    const chunkTestimonials = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const testimonialsChunks = chunkTestimonials(testimonialsLsit, 3); 

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <h2 className="section-title text-center">What Our Clients Say</h2>
                <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {testimonialsChunks.map((chunk, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            >
                                <div className="row">
                                    {chunk.map((testimonial) => (
                                        <div className="col-lg-4 col-md-6" key={testimonial.id}>
                                            <div className="testimonial-card">
                                                <p className="testimonial-text">{testimonial.cMessage}</p>
                                                <h5 className="client-name">- {testimonial.cName}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

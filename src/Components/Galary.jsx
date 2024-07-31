import { galleryList } from "../Script/index";

const Galary = () => {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <h2 className="section-title text-center">Our Gallery</h2>
                <div className="row">
                    {
                        galleryList.map(gallery => (
                            <div className="col-lg-4 col-md-6" key={gallery.id} >
                                <div className="gallery-item">
                                    <img src={gallery.image} alt="Gallery Image 1" className="img-fluid" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Galary
import { productList } from '../Script/index';

const Product = () => {
    return (
        <section id="products" className="products">
            <div className="container">
                <h2>Our Equipment for Rent</h2>
                <div className="product-grid">
                    {productList.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="description">{product.des}</p>
                            <p className="price">₹{product.price} {product.time}</p>
                            <a href="#" className="btn">Rent Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;

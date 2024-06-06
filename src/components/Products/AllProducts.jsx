import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(products);
  return (
    <div className="container">
        <h2 className="text-center my-5">Kharaz</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="card col-3 p-2">
            <img
              src={product.image}
              className="card-img-top"
              style={{ height: "200px", objectFit: "contain" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text">{truncateDescription(product.description, 100)}</p>
              <h3>{product.price}</h3>
              <a href="#" className="btn btn-danger">
                Add to cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

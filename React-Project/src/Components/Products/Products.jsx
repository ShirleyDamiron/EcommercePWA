import React from "react";

class Products extends React.Component {
  state = {
    products: [],
    filteredProducts: []
  }

  componentDidMount() {
    fetch("/api/products")
    .then(res => res.json())
    .then(res => this.setState({products: res}))
  }

  filterProducts = () => {
    let products = [...this.state.products];
    const filterType = document.querySelector(".filterType").value;
    const filterPrice = document.querySelector(".filterPrice").value;

    if (filterType !== "none") {
      products = products.filter(product => product.filterType === filterType);
    }

    if (filterPrice !== "none") {
      if (filterPrice === "low") {
        products.sort(
          (firstProduct, secondProduct) =>
            firstProduct.price - secondProduct.price
        );
      } else if (filterPrice === "high") {
        products.sort(
          (firstProduct, secondProduct) =>
            secondProduct.price - firstProduct.price
        );
      }
    }
    this.setState({
      filteredProducts: products
    });
  };

  render() {
    let products 
    if(this.state.filteredProducts.length > 0 ) {
      products = this.state.filteredProducts
    } else {
      products = this.state.products
    }
    return (
      <>
        <h1>Plaid Me</h1>
        <h2>The New Set Of Vinatge Fashion</h2>
        <h3>Filter Your Choice Down Below!</h3>
        {/* filter of type */}
        <div className="filter-container">
          <select
            id="filter"
            className="filterType"
            onChange={this.filterProducts}
          >
            <option value="none">Filter By Type</option>
            <option value="bottoms">Bottoms</option>
            <option value="overlay">Overlay</option>
            <option value="shoes">Shoes</option>
            <option value="dresses">Dresses</option>
            <option value="skirts">Skirts</option>
          </select>
          {/* filter of price */}
          <select className="filterPrice" onChange={this.filterProducts}>
            <option  value="none">Filter By Price</option>
            <option  value="high">Highest to Lowest</option>
            <option  value="low">Lowest to Highest</option>
          </select>
        </div>

        <div className="products-container">
          {products.map(product => {
            return (
              <figure className="image-container">
                <img src={product.src} alt={product.caption} />
                {/* text under each image */}
                <figcaption>{product.caption}</figcaption>
                <p>${product.price}</p>
              </figure>
            );
          })}
        </div>
      </>
    );
  }
}
export default Products;

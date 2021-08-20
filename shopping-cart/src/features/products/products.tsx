import React from 'react';
import formatCurrency from '../../utils/utils';
import './products.css'

interface ProductModel {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string,
}

type ProductsProps = {
  products: ProductModel[];
  addToCart: (e: any) => void;
};

type ProductsState = {
  product: ProductModel | null;
};

class Products extends React.Component<ProductsProps, ProductsState> {
  constructor(props: ProductsProps) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {}

  render() {
    const selectedProduct = this.state.product;

    return (
      <div>
        {!this.props.products ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <div>
                    <img src={product.image} alt={product.name}></img>
                    <p>{product.name}</p>
                  </div>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Avaiable Sizes:{' '}
                    {product.availableSizes.map((x) => (
                      <span>
                        {' '}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )} */}
      </div>
    );
  }
}

export default Products
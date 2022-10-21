import React, { Component } from 'react';

class Product extends Component {

  state = {
    products: []
  }

  componentDidMount(id) {
    fetch(` http://us-central1-test-b7665.cloudfunctions.net/api/stores/${id}/products` )
    .then((response) => response.json())
    .then(productsList => {
      this.setState({ products: productsList });
    });
  }


  render() {
    return (
      <div>

        {this.state.products?.map((product) => (
          <div className='col' >
            <div className="card" style={{ width: '16rem', textAlign: 'center' }}>
              <div className="card-body">

                <h5 className="card-title">{product.data.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.data.category}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{product.data.employees}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{product.data.description}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{product.data.price}</h6>
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Review
                  </button>
                  <div className="dropdown-menu">
                    <li><span className="dropdown-item-text">Review</span></li>
                    <li><span className="dropdown-item-text">this item sucks</span></li>
                  </div>
                </div><button onClick={() => this.props.onDelete(this.props.card.id)} type="button" className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>



        ))}

      </div>

    );
  }
}

export default Product;
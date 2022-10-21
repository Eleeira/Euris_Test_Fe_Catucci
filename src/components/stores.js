import React, { Component } from 'react';

class Stores extends Component {

  state = {
    stores: []
  }

  componentDidMount() {
    fetch('http://us-central1-test-b7665.cloudfunctions.net/api/stores/')
      .then((response) => response.json())
      .then(storesList => {
        this.setState({ stores: storesList });
      });
  }


  render() {
    return (
      <div>

        {this.state.stores?.map((store) => (
          <div className='col' >
            <div className="card" style={{ width: '16rem', textAlign: 'center' }}>
              <div className="card-body">

                <h5 className="card-title">{store.data.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{store.data.category}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{store.data.employees}</h6>
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

export default Stores;
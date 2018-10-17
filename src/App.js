import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-md-8">
      <form>
        <fieldset>
          <div className="col-md-10">
        <legend>SEARCH APP</legend>
          <div className="form-group row">
            <label htmlFor="searchPlace" className="col-sm-2 col-form-label">Place</label>
              <div className="col-sm-5">
                <input type="text" className="form-control-plaintext" id="searchPlace" value="Search Place"></input>
              </div>
            </div>
            </div>
            <div className="col-md-2">
            <button className="btn btn-primary">SEARCH</button>
              </div>
        </fieldset>
      </form>
      </div>

      <div className="col-md-4">
      <legend>Save Places</legend>

        </div>

      </div>
      </div>
    );
  }
}

export default App;

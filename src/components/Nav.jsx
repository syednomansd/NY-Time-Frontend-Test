import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
        <div className="lh-100">
          <h6 className="mb-0 text-white lh-100">New York Times</h6>
          <small>Since 1851</small>
        </div>
      </div>
    );
  }
};

export default Nav;

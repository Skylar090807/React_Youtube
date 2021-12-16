import React, { PureComponent } from 'react'

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo-cat fas fa-cat"></i>
        <i className="navbar-logo fas fa-paw"></i>
        <span>
          <strong>Habit Tracker</strong>
        </span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    )
  }
}

export default Navbar

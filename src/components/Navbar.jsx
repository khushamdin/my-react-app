import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const navbarStyle = {
    backgroundColor: props.mode === 'dark' ? '#333333' : '#f8f9fa',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              onChange={() => props.toggleMode('dark')}
              checked={props.mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              Dark Mode
            </label>
          </div>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="redModeSwitch"
              onChange={() => props.toggleMode('red')}
              checked={props.mode === 'red'}
            />
            <label className="form-check-label" htmlFor="redModeSwitch" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              Red Mode
            </label>
          </div>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="lightModeSwitch"
              onChange={() => props.toggleMode('light')}
              checked={props.mode === 'light'}
            />
            <label className="form-check-label" htmlFor="lightModeSwitch" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              Light Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

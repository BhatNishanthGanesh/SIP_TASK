import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center">
              <img
                src="https://w7.pngwing.com/pngs/577/307/png-transparent-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company-logo.png"
                alt=""
                className="logo rounded-circle border border-primary p-2"
                style={{ maxWidth: '80px' }} // Adjust the size here
              />
              <h2 className="mt-4 name">Twitter</h2>
            </div>
            <form className="mt-4 p-3">
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="far fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button className="btn btn-primary mt-3 btn-block">Login</button>
            </form>
            <div className="text-center fs-6 mt-3">
              <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

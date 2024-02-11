import "./style.css";
import logo from "../../assets/image/logo.png";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-sm">
      <div className="container">
        <a href="/#">
          <img className="logo" src={logo} alt="binar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end sidebar"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto nav-link ">
              <HashLink to="/#Services" className="nav-bar">
                Our Services
              </HashLink>
              <HashLink to="/#WhyUs" className="nav-bar">
                Why Us
              </HashLink>
              <HashLink to="/#Testimonial" className="nav-bar">
                Testimonial
              </HashLink>
              <HashLink to="/#FAQ" className="nav-bar">
                FAQ
              </HashLink>
              {!token ? (
                <a href="/register" className="nav-register">
                  Register
                </a>
              ) : (
                <a
                  onClick={handleLogout}
                  className="nav-register"
                  href={`${"/search" ? "" : "/register"}`}>
                  Logout
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

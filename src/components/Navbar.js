import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <i className="bi bi-whatsapp"></i> Chat Karo
        </span>
        <span>
          <a
            className="btn btn-outline-light"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/harshitgupta0910"
          >
            Code
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

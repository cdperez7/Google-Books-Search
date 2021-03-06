// import React from "react";
// import { Link } from "react-router-dom";

// function NavTabs() {
//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Search</Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/saved"
//                     className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved</Link>
//             </li>
//         </ul>
//     );
// }

// export default NavTabs;

import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/search">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
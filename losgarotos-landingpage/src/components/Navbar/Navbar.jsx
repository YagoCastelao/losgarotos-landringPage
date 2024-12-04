import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import './Navbar.css'


 export const Navbar = () => {
  return (
    <div className="padre container-fluid">
     <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid d-flex">
    <a className="navbar-brand d-flex justify-content-start" href="#">
      <img src="https://yt3.googleusercontent.com/gisiPMepsSuM4-ZJzr3oNZkSnYLXCIzogELA7IpcHsr9C6PVhqXnnGFVhq77ZUIIuqeRI2r29Ek=s900-c-k-c0x00ffffff-no-rj" alt="Logo" width="30" height="24" className="d-inline-block align-text-top m-1" />
      Garotos
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mb-2 mb-lg-0 d-lfex justify-content-end border">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar;
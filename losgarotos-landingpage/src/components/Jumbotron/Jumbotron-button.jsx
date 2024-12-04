import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import './Jumbotron-button.css'


 export const Jumbotron = () => {
  return (
    <>
     <div className="container d-flex justify-content-center p-3">
    <div className="container border w-100 h-100 p-4 bg-dark-subtle">
      <h1 className="container p-1">Wecome to Los Garotos</h1>
      <p className="container p-2">Bienvenido a la página de los garotos los mas top de todo internet porque si</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
    </button>
</div>
</div>
    </>
  )
}

export default Jumbotron;
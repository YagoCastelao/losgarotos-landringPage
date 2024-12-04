import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import './Card.css'


export const Card = () => {
  return (

    <div className="container-fluid p-2">
      <div className="row justify-content-center">
        {/* card #1 */}
        <div className="col-12 col-md-3 mb-3">
          <div className="card border mb-3">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/0004/brand.gif?itok=p6ewe6-E" className="card-img-top" alt="..." />
            <div className="card-body border d-flex flex-column align-items-center">
              <h5 className="card-title">Título</h5>
              <p className="card-text text-center">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            </div>
            <div className="card-footer bg-dark-subtle d-flex justify-content-center">
              <a href="#" className="button btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* card #2 */}
        <div className="col-12 col-md-3 mb-3">
          <div className="card border mb-3">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/0004/brand.gif?itok=p6ewe6-E" className="card-img-top" alt="..." />
            <div className="card-body border d-flex flex-column align-items-center">
              <h5 className="card-title">Título</h5>
              <p className="card-text text-center">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            </div>
            <div className="card-footer bg-dark-subtle d-flex justify-content-center">
              <a href="#" className="button btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* card #3 */}
        <div className="col-12 col-md-3 mb-3">
          <div className="card border mb-3">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/0004/brand.gif?itok=p6ewe6-E" className="card-img-top" alt="..." />
            <div className="card-body border d-flex flex-column align-items-center">
              <h5 className="card-title">Título</h5>
              <p className="card-text text-center">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            </div>
            <div className="card-footer bg-dark-subtle d-flex justify-content-center">
              <a href="#" className="button btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* card #4 */}
        <div className="col-12 col-md-3 mb-3">
          <div className="card border mb-3">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/0004/brand.gif?itok=p6ewe6-E" className="card-img-top" alt="..." />
            <div className="card-body border d-flex flex-column align-items-center">
              <h5 className="card-title">Título</h5>
              <p className="card-text text-center">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            </div>
            <div className="card-footer bg-dark-subtle d-flex justify-content-center">
              <a href="#" className="button btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

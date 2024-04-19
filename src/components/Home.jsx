import React from 'react';
import FoodCard from './FoodCard';
import axios from 'axios';
import ProductList from './ProductList';
// ../../src/assets/img
function Home() {
  const [data, SetData] = React.useState([]);
  const [active, SetActive] = React.useState(1);
  const [loading, SetLoading] = React.useState(true);

  const HandleClick = (id) => {
    SetActive(id);
  };

  const fetchData = () => {
    axios
      .get(`https://6622897627fcd16fa6ca20e2.mockapi.io/data`)
      .then((res) => {
        SetData(res.data);
        SetLoading(false);
      })
      .catch((error) => {
        console.log('There has been a problem with your axios get operation:', error);
        SetLoading(false);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <header className="row tm-welcome-section">
        <h2 className="col-12 text-center tm-section-title">Welcome to Simple House</h2>
        <p className="col-12 text-center">
          Total 3 HTML pages are included in this template. Header image has a parallax effect. You
          can feel free to download, edit and use this TemplateMo layout for your commercial or
          non-commercial websites.
        </p>
      </header>

      <div className="tm-paging-links">
        <nav>
          <ul>
            <li onClick={() => HandleClick(1)} className="tm-paging-item">
              <button className={`tm-paging-link ${active === 1 ? 'active' : ''}`}>Pizza</button>
            </li>
            <li onClick={() => HandleClick(2)} className="tm-paging-item">
              <button className={`tm-paging-link ${active === 2 ? 'active' : ''}`}>Salad</button>
            </li>
            <li className="tm-paging-item">
              <button
                onClick={() => HandleClick(3)}
                className={`tm-paging-link ${active === 3 ? 'active' : ''}`}>
                Noodle
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="row tm-gallery">
        {loading ? (
          <div>Loading...</div> // Сообщение о загрузке
        ) : data && data.length > 0 ? ( // Проверка на наличие данных
          <ProductList pizza={data} active={active} /> // Список пицц, когда данные загружены
        ) : ''}
      </div>
      <div className="tm-section tm-container-inner">
        <div className="row">
          <div className="col-md-6">
            <figure className="tm-description-figure">
              <img src="../../src/assets/img/img-01.jpg" alt="Image" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="tm-description-box">
              <h4 className="tm-gallery-title">Maecenas nulla neque</h4>
              <p className="tm-mb-45">
                Redistributing this template as a downloadable ZIP file on any template collection
                site is strictly prohibited. You will need to{' '}
                <a rel="nofollow" href="https://templatemo.com/contact">
                  talk to us
                </a>{' '}
                for additional permissions about our templates. Thank you.
              </p>
              <a href="about.html" className="tm-btn tm-btn-default tm-right">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

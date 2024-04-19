import React from 'react';
import FoodCard from './FoodCard';

function ProductList({ pizza, active }) {
  let data = pizza[0].pizza;
  if (active === 2) data = pizza[0].salad;
  if (active === 3) data = pizza[0].noodle;
  const types = ['pizza', 'salad', 'noodle'];
  return (
    <>
      <div id={`tm-gallery-page-${types[active - 1]}`} className="tm-gallery-page">
        {data.map((item, i) => {
          return <FoodCard key={i} item={item} />;
        })}
        {/* {pizza[0].pizza.map( (item, i) => {
        console.log(i, item)
     })} */}
      </div>
     

      {/* <div id="tm-gallery-page-noodle" className="tm-gallery-page hidden">
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src="img/gallery/08.jpg" alt="Image" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Noodle One</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="tm-gallery-price">$12.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src="img/gallery/07.jpg" alt="Image" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Noodle Second</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="tm-gallery-price">$15.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src="img/gallery/06.jpg" alt="Image" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Third Soft Noodle</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="tm-gallery-price">$20.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src="img/gallery/05.jpg" alt="Image" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Aliquam sagittis</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="tm-gallery-price">$30.25</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src="img/gallery/04.jpg" alt="Image" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Maecenas eget justo</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="tm-gallery-price">$35.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src="img/gallery/03.jpg" alt="Image" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Quisque et felis eros</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="tm-gallery-price">$40.50</p>
            </figcaption>
          </figure>
        </article>
      </div> */}
    </>
  );
}

export default ProductList;

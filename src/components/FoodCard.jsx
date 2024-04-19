import React from 'react';
// ../../src/assets/img

function FoodCard({item}) {
    const { img, title, description, price } = item;
  return (
    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
      <figure>
        <img src={img} alt="Image" className="img-fluid tm-gallery-img" />
        <figcaption>
          <h4 className="tm-gallery-title">{title}</h4>
          <p className="tm-gallery-description">
            {description}
          </p>
          <p className="tm-gallery-price">{price}</p>
        </figcaption>
      </figure>
    </article>
  );
}

export default FoodCard;
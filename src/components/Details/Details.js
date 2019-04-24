import React from "react";
import "./Details.css";
import image1 from "../Gallery/image1.jpg";
import image2 from "../Gallery/image2.jpg";

const Details = props => {
  const { chosenProductObject } = props;

  return (
    <div
      className="description-card clearfix wrapper"
      key={chosenProductObject.id}
    >
      <div className="image">
        {chosenProductObject.id === 1043 ? (
          <img src={image1} alt={chosenProductObject.name} />
        ) : chosenProductObject.id === 1042 ? (
          <img src={image2} alt={chosenProductObject.name} />
        ) : (
          <img
            src={chosenProductObject.image_link}
            alt={chosenProductObject.name}
          />
        )}
      </div>
      <div className="description clearfix">
        <div key={""}>
          <h2>{chosenProductObject.name}</h2>
          {chosenProductObject.price > 0 ? (
            <p>${props.round(chosenProductObject.price)}</p>
          ) : (
            <p className="none">Price is unavailable</p>
          )}

          <p className="descriptionText">{chosenProductObject.description}</p>
          {chosenProductObject.rating ? (
            <p>
              <strong>Rating:</strong> {chosenProductObject.rating}/5
            </p>
          ) : (
            <p className="noRating">
              Rating: <span>Unavailable</span>
            </p>
          )}
          <div className="clearfix">
            {chosenProductObject.product_colors.map(color => {
              return (
                <div className="colours" id={color.hex_value}>
                  <span
                    className="colour"
                    style={{ background: color.hex_value }}
                  />
                </div>
              );
            })}
          </div>
          <a
            href={chosenProductObject.product_link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;

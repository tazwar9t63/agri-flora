import React from "react";
import "./product.scss";

export default function SingleProduct({ product }) {
  console.log({ product });

  return (
    <>
      {product &&
        product.map((d, i) => (
          <div className="product-wrapper">
            <div className="product-container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${d.smallImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h1>{d.title}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <div className="icon">
                <i className="material-icons">Details</i>
              </div>
              <div className="contents">
                <table>
                  {d.detailsArray.map((d, i) => (
                    <tr>
                      <th>{d}</th>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

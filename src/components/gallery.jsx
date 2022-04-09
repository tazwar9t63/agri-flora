import SingleProduct from "./Product/product";

export const Gallery = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Products</h2>
          <p>
            Download
            <span style={{ marginLeft: "10px" }}>
              <a
                href="./public/pdf/MAXLAND_GROUP_CATALOG-1.pdf"
                target="_blank"
              >
                specifications of the protein meals in pdf
              </a>
            </span>
          </p>
        </div>
        <div className="row">
          <div className="products-items">
            <SingleProduct product={props.data} />

            {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."} */}
          </div>
        </div>
      </div>
    </div>
  );
};

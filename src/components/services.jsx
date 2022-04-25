export const Delivery = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Delivery</h2>
        </div>
        <p>How we supply</p>
        <p>THIS FUNCTION PROVIDES "QUICK TRACKING"</p>
        <div className="row delivery-row">
          <div className="col-xs-12 col-md-6 img-hover-zoom--slowmo">
            <img
              src="https://i.ibb.co/6w1NWBd/port.jpg"
              className="img-responsive"
              alt="delivery"
            />
          </div>
          <div className="col-xs-12 col-md-6 delivery">
            <div className="delivery-list-container">
              <p>Click for tracking of your shipment:</p>
              <ol className="delivery-list">
                {props.data
                  ? props.data.map((d, i) => (
                      <a target="_blank" href={d.link && d.link}>
                        <li className="delivery-list-item ">
                          <p className="effect-underline">
                            &#187; {d.name && d.name}
                          </p>
                        </li>
                      </a>

                      // <div key={`${d.name}-${i}`} className="col-md-4">
                      //   <i className={d.icon}></i>
                      //   <div className="service-desc">
                      //     <h3>{d.name}</h3>
                      //     <p>{d.text}</p>
                      //   </div>
                      // </div>
                    ))
                  : "loading"}
              </ol>
            </div>
          </div>
        </div>
        <p>
          We supply our products in 40 FT and 20 FT containers from the ports of
          UAE
        </p>
        <p>Delivery according to INCOTERMS 2010 - FOB/CIF/CFR.</p>
      </div>
    </div>
  );
};

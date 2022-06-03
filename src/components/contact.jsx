import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b04ign7",
        "template_9ud398p",
        e.target,
        "dVZFaVjZ0Pjy-VHnE"
      )
      .then(
        (result) => {
          setMessageSent(true);
  
          clearState();
        },
        (error) => {

        }
      );
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {!messageSent ? <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control effect-6"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control effect-6"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control effect-6"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form> : <div className="alert alert-success"> message sent successfully <button onClick={()=>setMessageSent(false)}>Sent Message Again</button> </div> }
              
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <p>
                  Compass Building, <br></br>
                  Al Shohada Road, <br></br>
                  Al Hamra Industrial Zone-FZ, <br></br>
                  Ras Al Khaimah, United Arab Emirates
                </p>
                {/* {props.data ? props.data.address : "loading"} */}
              </p>
            </div>
            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-mail-bulk"></i> Post Office
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                <a
                  className="white-text"
                  href={`tel:${props.data ? props.data.phone : +971504145426}`}
                >
                  {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                <a
                  className="white-text"
                  href={`mailto:${
                    props.data
                      ? props.data.email1
                      : "contact@agriflorafz-llc.com"
                  }`}
                >
                  {props.data ? props.data.email1 : "loading"}
                </a>
                <br />
                <a
                  className="white-text"
                  href={`mailto:${
                    props.data ? props.data.email2 : "info@agriflorafz-llc.com"
                  }`}
                >
                  {props.data ? props.data.email2 : "loading"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Copyright &copy; {currentYear} Agri Flora FZ-LLC, All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

import AwesomeSlider from "react-awesome-slider";

// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
// import withCaption from "react-awesome-slider/dist/captioned";
import animationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import "react-awesome-slider/dist/styles.css";
// import "react-awesome-slider/dist/captioned.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
// const CaptionedSlider = withCaption(AwesomeSlider);

export const Header = (props) => {
  return (
    <header id="header">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
        animation="foldOutAnimation"
        cssModule={[CoreStyles, animationStyles]}
      >
        <div data-src="https://i.ibb.co/L9cZfTv/cock.jpg" />

        <div data-src="https://i.ibb.co/bsG6D1f/sheep.jpg" />

        <div data-src="https://i.ibb.co/4S74jC1/cow.jpg" />
      </AutoplaySlider>
      {/* <CaptionedSlider
        startupScreen={StartupScreen}
        cssModule={CaptionedStyles}
        screens={[
          {
            backgroundColor: "#4a9c8c",
            media: "https://i.ibb.co/L9cZfTv/cock.jpg",
            caption: "I want to see what you got.",
          },
          {
            backgroundColor: "#4a9c8c",
            media: "https://i.ibb.co/bsG6D1f/sheep.jpg",
            caption: "The answer is -- Don't think about it.",
          },
        ]}
      /> */}
      {/* <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

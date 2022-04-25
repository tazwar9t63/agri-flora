import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import animationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Header = (props) => {
  return (
    <header id="features">
      <AutoplaySlider
        className="carousel"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
        animation="foldOutAnimation"
        cssModule={[CoreStyles, animationStyles]}
        mobileTouch={true}
      >
        <div data-src="https://i.ibb.co/hYkYKdj/cow.png" />
        <div data-src="https://i.ibb.co/QPBHmyV/chicken.jpg" />
        <div data-src="https://i.ibb.co/1Qxn7yv/fish.jpg" />
        {/* <div data-src="https://i.ibb.co/Vg25dWp/sheep.jpg" /> */}
        <div data-src="https://i.ibb.co/6FBGMz5/soyabeen.jpg" />
      </AutoplaySlider>
    </header>
  );
};

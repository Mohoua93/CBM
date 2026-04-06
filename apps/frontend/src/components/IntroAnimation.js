import "../styles/IntroAnimation.css";
import logo from "../assets/Logo-transp.png";

function IntroAnimation() {
  return (
    <div className="intro" aria-hidden="true">
      <img
        className="intro__logo"
        src={logo}
        alt="C.B.M Services & Cars"
      />
    </div>
  );
}

export default IntroAnimation;
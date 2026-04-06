import "../styles/IntroAnimation.css";
import logo from "../assets/logo-anim.png";

function IntroAnimation() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__content">
        <img src={logo} alt="CBM" className="intro__logo" />

        <div className="intro__line-wrap">
          <span className="intro__line"></span>
        </div>

        <p className="intro__text">service and car - chargement</p>
      </div>
    </div>
  );
}

export default IntroAnimation;
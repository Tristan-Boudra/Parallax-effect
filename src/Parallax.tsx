import "./App.css";
import { gsap } from "gsap";

interface ParallaxProps {
  urlBack: string;
  urlFront: string;
  urlFrontRemove: string;
  contentTop: string;
  contentBottom: string;
}

export function Parallax(props: ParallaxProps) {
  const { urlBack, urlFront, urlFrontRemove, contentTop, contentBottom } =
    props;

  const update = ({ x, y }: { x: number; y: number }) => {
    gsap.set(document.documentElement, {
      "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
      "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
    });
  };

  window.addEventListener("pointermove", update);

  return (
    <>
      <article>
        {/* <img src="https://assets.codepen.io/605876/osaka-sky.jpeg" alt="" /> */}
        <img src={urlBack} alt="" />
        <h3>{contentTop}</h3>
        {/* <img src="https://assets.codepen.io/605876/osaka-tower.png" alt="" /> */}
        <img src={urlFront} alt="" />
        <div className="blur">
          {/* <img src="https://assets.codepen.io/605876/osaka.jpeg" alt="" /> */}
          <img src={urlFrontRemove} alt="" />
        </div>
        <div className="content">
          <p>{contentBottom}</p>
        </div>
      </article>
    </>
  );
}

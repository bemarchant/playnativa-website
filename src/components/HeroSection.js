import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import background from "../img/background.png";
import moon from "../img/moon.png";
import mountains1 from "../img/mountains-1.png";
import mountains2 from "../img/mountains-2.png";
import mountains3 from "../img/mountains-3.png";
import mountains4 from "../img/mountains-4.png";
import mountains5 from "../img/mountains-5.png";
import lake from "../img/lake.png";
import main from "../img/main.png";

export function HeroSection() {
  return (
    <div className="container">
      <Parallax pages={11}>
        <ParallaxLayer
          offset={0}
          speed={0.0}
          factor={2}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.0}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.4}
          factor={2}
          style={{
            backgroundImage: `url(${mountains1})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${mountains2})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.6}
          factor={2}
          style={{
            backgroundImage: `url(${mountains3})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          factor={2}
          style={{
            backgroundImage: `url(${mountains4})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${mountains5})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.9}
          factor={2}
          style={{
            backgroundImage: `url(${lake})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${main})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

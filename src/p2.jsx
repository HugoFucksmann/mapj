import React, { useEffect, useRef } from "react";
import p5 from "p5";

const Particles = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let t = 0;
      const speed = p.PI / 30; // Incrementa este valor para mayor velocidad

      // Función a
      const a = (x, y, d = 5 * p.cos(p.mag(x / 8 - 25, y / 8 - 25) / 3)) => {
        const k = x / 8 - 25;
        const e = y / 8 - 25;
        const q = x / 2 + (k / p.atan(9 * p.cos(e))) * p.sin(d * 4 - t);
        const c = d / 3 - t / 8;
        return [
          q * p.sin(c) + p.width / 2,
          ((y / 3 + d + q) / 2) * p.cos(c) + p.height / 2,
        ];
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth / 2, p.windowHeight);
        p.background(6, 19);
      };

      p.draw = () => {
        p.background(6, 19);
        t += speed;
        for (let y = 99; y < 300; y++) {
          for (let x = 99; x < 300; x++) {
            p.stroke(x, y, y + x, 36);
            p.point(...a(x, y));
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth / 2, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    // Cleanup function to remove the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Particles;

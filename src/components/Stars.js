import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function Stars() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false
        },

        particles: {
          number: {
            value: 80
          },

          color: {
            value: "#ffffff"
          },

          size: {
            value: { min: 1, max: 3 }
          },

          move: {
            enable: true,
            speed: 0.3
          },

          opacity: {
            value: 0.7
          }
        },

        background: {
          color: "transparent"
        }
      }}
    />
  );
}

export default Stars;
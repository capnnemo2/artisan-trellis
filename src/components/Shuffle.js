import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Shuffle({ clearProductDetails }) {
  const [random, set_random] = useState("");

  const location = useLocation();

  useEffect(() => {
    function getRandomScene() {
      const all_scenes = ["/", "/scene2"];

      const all_other_scenes = all_scenes.filter(
        (scene) => scene !== location.pathname
      );
      const max = all_other_scenes.length;
      const random_selection = Math.floor(Math.random() * Math.floor(max));

      return all_other_scenes[random_selection];
    }

    set_random(getRandomScene);
  }, [location.pathname]);

  return (
    <div className="Shuffle">
      <p>Explore more scenes</p>
      <Link to={random} onClick={() => clearProductDetails()}>
        Go
      </Link>
    </div>
  );
}

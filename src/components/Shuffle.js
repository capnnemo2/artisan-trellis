import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Shuffle({ clearProductDetails }) {
  const [random, set_random] = useState("");

  const location = useLocation();

  const all_scenes = ["/", "/scene2"];

  function getRandomScene(all_scenes) {
    const all_other_scenes = all_scenes.filter(
      (scene) => scene !== location.pathname
    );
    const max = all_other_scenes.length;
    const random_selection = Math.floor(Math.random() * Math.floor(max));

    return all_other_scenes[random_selection];
  }

  useEffect(() => {
    set_random(getRandomScene(all_scenes));
  }, [all_scenes]);

  return (
    <div className="Shuffle">
      <p>Explore more scenes</p>
      <Link to={random} onClick={() => clearProductDetails()}>
        Go
      </Link>
    </div>
  );
}

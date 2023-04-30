import React from "react";
import { useEffect, useState } from "react";

export const Message = () => {
  const [coorsState, setCoorsState] = useState({ x: 0, y: 0 });
  const { x, y } = coorsState;
  useEffect(() => {
    const mouseMove = (e) => {
      const coors = {
        x: e.x,
        y: e.y,
      };
      console.log(coors);
      setCoorsState({
        x: coors.x,
        y: coors.y,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>WOW 123</h1>
      <p>x:   {x}</p>
      <p>y:   {y}</p>
    </div>
  );
};

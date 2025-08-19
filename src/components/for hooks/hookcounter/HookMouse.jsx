import { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);

  const logMousePostion = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    sety(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", logMousePostion);
    console.log("useEfect called");
  }, []);

  return (
    <>
      Hooks x - {x} y - {y}
    </>
  );
}

export default HookMouse;

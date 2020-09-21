import React, { useEffect } from "react";

function Congrats () {
  useEffect(function () {
    document.title = "Congrats!!!";
    return function () {
      document.title = "Back to normal";
    }
  });

  return (
    <p>Congrats on your first click!!!!</p>
  );
}

export default Congrats;
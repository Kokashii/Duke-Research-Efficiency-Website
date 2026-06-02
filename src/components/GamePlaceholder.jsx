import { useState } from "react";
import "./GamePlaceholder.css";

export default function GamePlaceholder() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({
    left: 50,
    top: 50,
  });

  const moveButton = () => {
    setPosition({
      left: Math.random() * 80,
      top: Math.random() * 80,
    });

    setScore((s) => s + 1);
  };

  return (
    <div className="game-container">
      <h2 className="score">Score: {score}</h2>

      <button
        className="target"
        onClick={moveButton}
        style={{
          left: `${position.left}%`,
          top: `${position.top}%`,
        }}
      >
        Catch Me
      </button>
    </div>
  );
}
function FinishScreen({ maxPossiblePoints, points, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "😄";
  if (percentage >= 50 && percentage < 80) emoji = "🤔";
  if (percentage <= 50) emoji = "😔";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored:
        <strong>
          {points}/{maxPossiblePoints} ({Math.ceil(percentage)}) %
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;

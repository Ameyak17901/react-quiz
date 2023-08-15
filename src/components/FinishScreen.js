function FinishScreen({ maxPossiblePoints, points }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "😄";
  if (percentage >= 50 && percentage < 80) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored:
        <strong>
          {points}/{maxPossiblePoints} ({Math.ceil(percentage)}) %{" "}
        </strong>
      </p>
      <p className="highscore">(Highscore: 0 points)</p>
    </>
  );
}

export default FinishScreen;

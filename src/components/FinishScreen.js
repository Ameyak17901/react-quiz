function FinishScreen({ maxPossiblePoints, points }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <p className="finish">
      You scored {points} / {maxPossiblePoints} ({Math.ceil(percentage)})
    </p>
  );
}

export default FinishScreen;

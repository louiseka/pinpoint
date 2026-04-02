export default function CompletedGoals({ goal }) {
  return (
    <section className="saved-goal-external">
      <div className="saved-goal-internal">
        <div className="goal-heading">
          <h3>{goal.goalName}</h3>
          <p className="goal-label">Completed</p>
        </div>
        <div className="goal-details">
          <h4>Why I wanted it</h4>
          <p>{goal.goalReason} </p>
          <h4>How I rewarded myself</h4>
          <p>{goal.goalReward} </p>
        </div>
      </div>
    </section>
  );
}

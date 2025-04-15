export default function CompletedGoals({ goal }) {


    return (
        <div className="saved-goal-external">
            <div className="saved-goal-internal">
                <div className="goal-heading">
                    <h2>{goal.goalName}</h2>
                    <p className="goal-label">Completed</p>
                </div>
                <div className="goal-details">
                    <h3>Why I wanted it</h3>
                    <p>{goal.goalReason} </p>
                    <h3>How I rewarded myself</h3>
                    <p>{goal.goalReward} </p>
                </div>
            </div>
        </div>

    )
}
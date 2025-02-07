export default function SavedGoal({ goalData }) {

    return (
        <div className="saved-goal-external">
            <div className="saved-goal-internal">
                <div className="goal-heading">
                    <h2>{goalData.goalName}</h2>
                    <p className="goal-label">{goalData.goalLevel}</p>
                </div>
                <div className="goal-details">
                    <h3>Why I want it</h3>
                    <p>{goalData.goalReason} </p>
                    <h3>Reward for doing it</h3>
                    <p>{goalData.goalReward} </p>
                </div>
                <div>
                    <h3>What I need to do:</h3>

                </div>
                <div className="goal-footer">
                    <p> <span className="small-bold-text"> I want to achieve it by: </span> {goalData.goalDeadline} </p>
                    <button className="goal-complete-btn">Mark goal as achieved</button>
                </div>
            </div>
        </div>
    )
}
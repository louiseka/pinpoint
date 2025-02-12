export default function AddGoal({ renderGoalForm }) {
    return (
        <div className="add-goal-block">
            <button onClick={() => renderGoalForm()}> Get started and create your first goal</button>
        </div>
    )
}
export default function AddGoal({ renderGoalForm, goalData }) {


    const buttonText = goalData.length > 0 ? "Add another goal" : "Get started and create your first goal"

    return (
        <div className="add-goal-block">
            <button onClick={() => renderGoalForm()}> {buttonText}</button>
        </div>
    )
}
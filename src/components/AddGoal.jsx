import "/src/styles/add-goal.css"

export default function AddGoal({ renderGoalForm, goalData }) {


    const buttonText = goalData.length > 0 ? "Add another goal" : "Get started and create your first goal"

    return (
        <div>
            <button className="add-goal-btn" onClick={() => renderGoalForm()}> {buttonText}</button>
        </div>
    )
}
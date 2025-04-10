import "/src/styles/add-goal.css"

export default function AddGoal({ renderGoalForm, goalData }) {


    const buttonText = goalData.length > 0 ? "Add another goal" : "Get started and create your first goal"

    return (
        <div className="side-nav-add">
            <h2>Add new goal </h2>
            <button className="add-goal-btn" onClick={() => renderGoalForm()}> {buttonText}</button>
        </div>
    )
}
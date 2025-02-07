import { useState } from "react"


export default function GoalForm({ saveGoal }) {

    const [goalData, setGoalData] = useState({
        goalName: "",
        goalLevel: "",
        goalReason: "",
        goalReward: "",
        goalDeadline: ""
    })

    function handleChange(e) {
        setGoalData(prevGoalData => {
            return {
                ...prevGoalData,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleCreateGoal(e) {
        e.preventDefault()
        saveGoal(goalData)
    }

    const todaysDate = new Date()
    const year = todaysDate.getFullYear()
    const month = String(todaysDate.getMonth() + 1).padStart(2, "0")
    const day = String(todaysDate.getDate()).padStart(2, "0")

    return (
        <form className="goal-form">
            <label htmlFor="goal-name">Goal Name:</label>
            <input required type="text" name="goalName" id="goal-name" value={goalData.goalName} onChange={handleChange} />

            <fieldset>
                <legend>What level is your goal?</legend>
                <input type="radio" id="goalLevel1" name="goalLevel" value="Easy" checked={goalData.goalLevel === "Easy"} onChange={handleChange} />
                <label htmlFor="goalLevel1">Easy</label>
                <input type="radio" id="goalLevel2" name="goalLevel" value="Moderate" checked={goalData.goalLevel === "Moderate"} onChange={handleChange} />
                <label htmlFor="goalLevel2">Moderate</label>
                <input type="radio" id="goalLevel3" name="goalLevel" value="Hard" checked={goalData.goalLevel === "Hard"} onChange={handleChange} />
                <label htmlFor="goalLevel3">Hard</label>
                <input type="radio" id="goalLevel4" name="goalLevel" value="Stretch" checked={goalData.goalLevel === "Stretch"} onChange={handleChange} />
                <label htmlFor="goalLevel4">Stretch</label>
            </fieldset>

            <label htmlFor="goal-reason">Why do you want to achieve this goal?</label>
            <input type="text" name="goalReason" id="goal-reason" value={goalData.goalReason} onChange={handleChange} />

            <label htmlFor="goal-reward">What will you reward yourself with?</label>
            <input type="text" name="goalReward" id="goal-reward" value={goalData.goalReward} onChange={handleChange} />

            <label htmlFor="deadline">When do you want to achieve this goal by?</label>
            <input type="date" name="goalDeadline" id="deadline" min={`${year}-${month}-${day}`} max="2025-12-31" value={goalData.goalDeadline} onChange={handleChange} />

            <input type="submit" onClick={handleCreateGoal} value="Create your goal" />

        </form>
    )

}
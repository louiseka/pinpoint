import "/src/styles/goal-form.css"
import { useState } from "react"

export default function GoalForm({ saveGoal }) {

    const [formData, setFormData] = useState({
        goalName: "",
        goalLevel: "",
        goalReason: "",
        goalReward: "",
        goalDeadline: ""
    })

    function handleChange(e) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }


    const todaysDate = new Date()
    const year = todaysDate.getFullYear()
    const month = String(todaysDate.getMonth() + 1).padStart(2, "0")
    const day = String(todaysDate.getDate()).padStart(2, "0")

    return (
        <form className="goal-form-external goal-form" onSubmit={(e) => saveGoal(formData, e)}>
            <div className="goal-form-internal">
                <label htmlFor="goal-name">Goal Name: <span className="small-text">(Required)</span></label>
                <input required type="text" name="goalName" id="goal-name" value={formData.goalName} onChange={handleChange} />

                <fieldset>
                    <legend>What level is your goal?</legend>
                    <input type="radio" id="goalLevel1" name="goalLevel" value="Easy" checked={formData.goalLevel === "Easy"} onChange={handleChange} />
                    <label htmlFor="goalLevel1">Easy</label>
                    <input type="radio" id="goalLevel2" name="goalLevel" value="Moderate" checked={formData.goalLevel === "Moderate"} onChange={handleChange} />
                    <label htmlFor="goalLevel2">Moderate</label>
                    <input type="radio" id="goalLevel3" name="goalLevel" value="Hard" checked={formData.goalLevel === "Hard"} onChange={handleChange} />
                    <label htmlFor="goalLevel3">Hard</label>
                    <input type="radio" id="goalLevel4" name="goalLevel" value="Stretch" checked={formData.goalLevel === "Stretch"} onChange={handleChange} />
                    <label htmlFor="goalLevel4">Stretch</label>
                </fieldset>

                <label htmlFor="goal-reason">Why do you want to achieve this goal? <span className="small-text">(Required)</span></label>
                <input required type="text" name="goalReason" id="goal-reason" value={formData.goalReason} onChange={handleChange} />

                <label htmlFor="goal-reward">What will you reward yourself with? <span className="small-text">(Required)</span></label>
                <input required type="text" name="goalReward" id="goal-reward" value={formData.goalReward} onChange={handleChange} />

                <label htmlFor="deadline">When do you want to achieve this goal by?</label>
                <input type="date" name="goalDeadline" id="deadline" min={`${year}-${month}-${day}`} max="2025-12-31" value={formData.goalDeadline} onChange={handleChange} />

                <input type="submit" value="Create your goal" />
            </div>
        </form>
    )

}
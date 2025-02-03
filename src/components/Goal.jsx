export default function Goal() {

    function handleCreateGoal(e) {
        e.preventDefault()
        console.log("Btn clicked")
    }

    return (
        <form className="goal-form">
            <label htmlFor="goal-name">Goal Name:</label>
            <input type="text" name="goal-name" id="goal-name" />

            <fieldset>
                <legend>What level is your goal?</legend>
                <input type="radio" id="goalLevel1" name="level" value="easy" />
                <label htmlFor="goalLevel1">Easy</label>
                <input type="radio" id="goalLevel2" name="level" value="moderate" />
                <label htmlFor="goalLevel2">Moderate</label>
                <input type="radio" id="goalLevel3" name="level" value="hard" />
                <label htmlFor="goalLevel3">Hard</label>
                <input type="radio" id="goalLevel4" name="level" value="stretch" />
                <label htmlFor="goalLevel4">Stretch</label>
            </fieldset>

            <label htmlFor="goal-reason">Why do you want to achieve this goal?</label>
            <input type="text" name="goal-reason" id="goal-reason" />

            <label htmlFor="goal-reward">What will you reward yourself with?</label>
            <input type="text" name="goal-reward" id="goal-reward" />

            <label htmlFor="deadline">When do you want to achieve this goal by?</label>
            <input type="date" name="deadline" id="deadline" min="2025-02-03" max="2025-12-31" />

            <input type="submit" onClick={handleCreateGoal} value="Create your goal" />

        </form>
    )

}
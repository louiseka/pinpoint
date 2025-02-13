import GoalForm from "./components/GoalForm"
import SavedGoal from "./components/SavedGoal"
import AddGoal from "./components/AddGoal"

import { useState } from "react"

function App() {

  const [showGoalForm, setShowGoalForm] = useState(false)
  const [goals, setGoals] = useState([])


  function renderGoalForm() {
    setShowGoalForm(true)
  }

  function saveGoal(goalData, e) {
    e.preventDefault()
    setGoals((prevGoals) => {
      return [...prevGoals, goalData]
    })
    setShowGoalForm(false)
  }


  return (
    <>
      <h1>Pinpoint</h1>
      <div className="wrapper">
        {goals.length > 0 && <SavedGoal goalData={goals[0]} />}
        {!showGoalForm && <AddGoal renderGoalForm={renderGoalForm} goalData={goals} />}
        {showGoalForm && <GoalForm saveGoal={saveGoal} />}


      </div>
    </>
  )
}

export default App

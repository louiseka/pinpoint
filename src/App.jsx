import GoalForm from "./components/GoalForm"
import SavedGoal from "./components/SavedGoal"
import AddGoal from "./components/AddGoal"

import { useState } from "react"

function App() {

  const [goals, setGoals] = useState([])


  function saveGoal(goalData, e) {
    e.preventDefault()
    setGoals((prevGoals) => {
      return [...prevGoals, goalData]
    })
  }


  return (
    <>
      <h1>Pinpoint</h1>
      <AddGoal />
      <GoalForm saveGoal={saveGoal} />

      {goals.length > 0 && <SavedGoal goalData={goals[0]} />}

    </>
  )
}

export default App

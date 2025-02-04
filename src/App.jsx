import GoalForm from "./components/GoalForm"
import SavedGoal from "./components/SavedGoal"

import { useState } from "react"

function App() {

  const [goals, setGoals] = useState([])


  function addGoal(goalData) {
    setGoals((prevGoals) => {
      return [...prevGoals, goalData]
    })
  }


  return (
    <>
      <h1>Pinpoint</h1>
      <GoalForm addGoal={addGoal} />

      {goals.length > 0 && <SavedGoal goalData={goals[0]} />}

    </>
  )
}

export default App

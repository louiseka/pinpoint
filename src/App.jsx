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

  function saveGoal(formData, e) {
    e.preventDefault()
    formData.toDoList = []
    setGoals((prevGoals) => {
      return [...prevGoals, formData]
    })
    setShowGoalForm(false)
  }

  function saveToDoItem(toDoData, id) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal, index) => {
        if (index === id) {
          goal.toDoList = [...goal.toDoList, toDoData]
        }
        return goal
      })
    })
  }


  return (
    <>
      <h1>Pinpoint</h1>
      <div className="wrapper">
        {goals.length > 0 && <SavedGoal goalData={goals[0]} goalId={0} saveToDoItem={saveToDoItem} />}
        {!showGoalForm && <AddGoal renderGoalForm={renderGoalForm} goalData={goals} />}
        {showGoalForm && <GoalForm saveGoal={saveGoal} />}


      </div>
    </>
  )
}

export default App

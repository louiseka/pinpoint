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

  function completeToDoItem(goalId, toDoIndex, complete) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal, index) => {
        if (index === goalId) {
          goal.toDoList[toDoIndex] = { ...goal.toDoList[toDoIndex], complete: complete }
        }
        return goal
      })
    })
  }

  function deleteToDoItem(goalId, toDoIndex) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal, index) => {
        if (index === goalId) {
          goal.toDoList = goal.toDoList.toSpliced(toDoIndex, 1)
        }
        return goal
      })
    })
    console.log("Item deleted")
  }


  return (
    <>
      <h1>Pinpoint</h1>
      <div className="wrapper">
        {/* {goals.length > 0 && <SavedGoal goalData={goals[0]} goalId={0} saveToDoItem={saveToDoItem} completeToDoItem={completeToDoItem} deleteToDoItem={deleteToDoItem} />} */}
        {goals.map((goal, index) => <SavedGoal goalData={goal} goalId={index} key={index} saveToDoItem={saveToDoItem} completeToDoItem={completeToDoItem} deleteToDoItem={deleteToDoItem} />)}
        {!showGoalForm && <AddGoal renderGoalForm={renderGoalForm} goalData={goals} />}
        {showGoalForm && <GoalForm saveGoal={saveGoal} />}


      </div>
    </>
  )
}

export default App

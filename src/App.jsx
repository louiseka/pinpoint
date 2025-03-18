import GoalForm from "./components/GoalForm"
import SavedGoal from "./components/SavedGoal"
import AddGoal from "./components/AddGoal"

import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

function App() {

  const [showGoalForm, setShowGoalForm] = useState(false)
  const [goals, setGoals] = useState(() => {
    const persistedGoals = window.localStorage.getItem("persisted-goals")
    return persistedGoals !== null ? JSON.parse(persistedGoals) : []
  })

  useEffect(() => {
    window.localStorage.setItem("persisted-goals", JSON.stringify(goals))
  }, [goals])

  function renderGoalForm() {
    setShowGoalForm(true)
  }

  function saveGoal(formData, e) {
    e.preventDefault()
    formData.toDoList = []
    const goal = { ...formData, id: nanoid() }
    setGoals((prevGoals) => {
      return [...prevGoals, goal]
    })
    setShowGoalForm(false)
  }

  function deleteGoal(goalId) {

    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId)
    })
  }

  function saveToDoItem(toDoData, id) {
    const toDo = { ...toDoData, id: nanoid() }
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.id === id) {
          return {
            ...goal,
            toDoList: [...goal.toDoList, toDo]
          }
        }
        return goal
      })
    })
  }

  function completeToDoItem(goalId, toDoId, complete) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.id === goalId) {
          const toDoIndex = goal.toDoList.findIndex((toDo) => toDo.id === toDoId)
          goal.toDoList[toDoIndex] = { ...goal.toDoList[toDoIndex], complete: complete }
        }
        return goal
      })
    })
  }

  function deleteToDoItem(goalId, toDoId) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.id === goalId) {
          const toDoIndex = goal.toDoList.findIndex((toDo) => toDo.id === toDoId)
          return {
            ...goal,
            toDoList: goal.toDoList.toSpliced(toDoIndex, 1)
          }
        }
        return goal
      })
    })
  }


  return (
    <>
      <h1>Pinpoint</h1>
      <div className="wrapper">
        {goals.map((goal) => <SavedGoal goalData={goal} deleteGoal={deleteGoal} goalId={goal.id} key={goal.id} saveToDoItem={saveToDoItem} completeToDoItem={completeToDoItem} deleteToDoItem={deleteToDoItem} />)}
        {!showGoalForm && <AddGoal renderGoalForm={renderGoalForm} goalData={goals} />}
        {showGoalForm && <GoalForm saveGoal={saveGoal} />}


      </div>
    </>
  )
}

export default App

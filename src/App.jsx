import Header from "./components/Header"
import GoalForm from "./components/GoalForm"
import SavedGoal from "./components/SavedGoal"
import AddGoal from "./components/AddGoal"
import CompletedGoal from "./components/CompletedGoal"
import SideNav from "./components/SideNav"

import "./styles/themes.css"

import { useState, useEffect, useMemo } from "react"
import { nanoid } from "nanoid"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"



function App() {

  const { width, height } = useWindowSize()

  const [showGoalForm, setShowGoalForm] = useState(false)
  const [goalComplete, setGoalComplete] = useState(false)
  const [goals, setGoals] = useState(() => {
    const persistedGoals = window.localStorage.getItem("persisted-goals")
    return persistedGoals !== null ? JSON.parse(persistedGoals) : []
  })

  const [theme, setTheme] = useState("theme-a")

  const [filterParams, setFilterParams] = useState(null)

  const filteredGoals = useMemo(
    () => {
      if (!filterParams) {
        return goals
      }
      return goals.filter(goal => goal.goalLevel === filterParams && !goal.complete)
    },
    [goals, filterParams]
  )

  useEffect(() => {
    window.localStorage.setItem("persisted-goals", JSON.stringify(goals))
  }, [goals])

  function renderGoalForm() {
    setShowGoalForm(true)
  }

  function closeGoalForm() {
    setShowGoalForm(false)
  }

  function saveGoal(formData, e) {
    e.preventDefault()
    formData.toDoList = []
    const goal = { ...formData, id: nanoid(), complete: false }
    setGoals((prevGoals) => {
      return [...prevGoals, goal]
    })
    setShowGoalForm(false)
  }

  function completeGoal(goalId) {
    setGoalComplete(true)
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.id === goalId) {
          return { ...goal, complete: true }
        }
        return goal
      })
    })
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
    <div className={theme}>
      <Header />
      <main>
        <section className="side-nav">
          {!showGoalForm && <AddGoal renderGoalForm={renderGoalForm} goalData={goals} />}
          <SideNav filterParams={filterParams} setFilterParams={setFilterParams} setTheme={setTheme} theme={theme} goals={goals} />
        </section>


        <section className="wrapper">
          {showGoalForm && <GoalForm saveGoal={saveGoal} closeGoalForm={closeGoalForm} />}
          {filteredGoals.length === 0 && goals.length > 0 ?
            <p className="notice-text">No goals found for this filter.</p>
            : filteredGoals.filter((goal) => !goal.complete).map((goal) =>
              <SavedGoal goalData={goal} deleteGoal={deleteGoal} completeGoal={completeGoal} goalId={goal.id} key={goal.id} saveToDoItem={saveToDoItem} completeToDoItem={completeToDoItem} deleteToDoItem={deleteToDoItem} />)}
          {goalComplete && <Confetti width={width} height={height} recycle={false} onConfettiComplete={() => { setGoalComplete(false) }} />}
        </section>

        {goals.filter((goal) => goal.complete).length > 0 && <h2 className="secondary-header">Completed Goals</h2>}
        <section className="wrapper">

          {goals.filter((goal) => goal.complete).map((goal) => <CompletedGoal key={goal.id} goal={goal} />)}
        </section>
      </main>
    </div>
  )
}

export default App

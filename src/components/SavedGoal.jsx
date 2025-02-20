import "/src/styles/saved-goal.css"
import { useState } from "react"
import { FaPlus, FaCheck, FaTimes } from "react-icons/fa"

export default function SavedGoal({ goalData, goalId, saveToDoItem }) {

    const [toDoData, setToDoData] = useState({
        toDoItem: ""
    })

    function handleChange(e) {
        setToDoData(prevToDoData => {
            return {
                ...prevToDoData,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (toDoData.toDoItem === "") {
            return
        }
        saveToDoItem(toDoData, goalId)
        setToDoData(() => {
            return {
                toDoItem: ""
            }
        })
    }

    return (
        <div className="saved-goal-external">
            <div className="saved-goal-internal">
                <div className="goal-heading">
                    <h2>{goalData.goalName}</h2>
                    <p className="goal-label">{goalData.goalLevel}</p>
                </div>
                <div className="goal-details">
                    <h3>Why I want it</h3>
                    <p>{goalData.goalReason} </p>
                    <h3>Reward for doing it</h3>
                    <p>{goalData.goalReward} </p>
                </div>
                <div className="to-do-form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="to-do">What I need to do:</label>
                        <div className="to-do-input">
                            <input type="text" name="toDoItem" id="to-do" value={toDoData.toDoItem} onChange={handleChange} placeholder="Add an item to your to-do list"></input>
                            <button type="submit" className="add-btn"><FaPlus /></button>
                        </div>
                    </form>
                    <ul>
                        {goalData.toDoList.map(({ toDoItem }, index) => <li key={index}> <div className="to-do-actions"> {toDoItem} <span className="action-btns"><FaCheck className="done-btn" /> <FaTimes className="delete-btn" /></span></div></li>)}
                    </ul>
                </div>
                <div className="goal-footer">
                    <p> <span className="small-bold-text"> I want to achieve it by: </span> {goalData.goalDeadline} </p>
                    <button className="goal-complete-btn">Mark goal as achieved</button>
                </div>
            </div>
        </div>
    )
}
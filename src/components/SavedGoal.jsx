import "/src/styles/saved-goal.css"
import { useState } from "react"
import { FaPlus, FaTimes } from "react-icons/fa"

export default function SavedGoal({ goalData, goalId, saveToDoItem, completeToDoItem, deleteToDoItem }) {

    const [toDoData, setToDoData] = useState({
        toDoItem: "",
        complete: false
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
                toDoItem: "",
                complete: false
            }
        })
    }

    function toDoItemDone(index, complete) {
        completeToDoItem(goalId, index, !complete)
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
                        {goalData.toDoList.map(({ toDoItem, complete }, index) => (
                            <li className={complete ? 'to-do-item-done' : 'to-do-item'} key={index}>
                                <div className="to-do-actions">
                                    <label htmlFor={toDoItem}> {toDoItem} </label>
                                    <span className="action-btns">
                                        <input type="checkbox" id={toDoItem} value={toDoItem} onClick={() => toDoItemDone(index, complete)}></input>

                                        <button className="delete-btn" onClick={() => deleteToDoItem(goalId, index)} ><FaTimes /></button>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="goal-footer">
                    {goalData.goalDeadline && <p> <span className="small-bold-text"> I want to achieve it by: </span> {goalData.goalDeadline} </p>}
                    <button className="goal-complete-btn">Mark goal as achieved</button>
                </div>
            </div>
        </div>
    )
}
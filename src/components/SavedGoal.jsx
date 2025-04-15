import "/src/styles/saved-goal.css"
import { useState } from "react"
import { FaPlus, FaTimes } from "react-icons/fa"



export default function SavedGoal({ goalData, goalId, saveToDoItem, completeToDoItem, deleteToDoItem, deleteGoal, completeGoal }) {

    const [toDoData, setToDoData] = useState({
        toDoItem: "",
        complete: false
    })

    const value = 100 * (goalData.toDoList.filter((toDo) => toDo.complete).length / goalData.toDoList.length) || 0




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
                        <label className="to-do-label" htmlFor="to-do">What I need to do:</label>
                        <div className="to-do-input">
                            <input type="text" name="toDoItem" id="to-do" value={toDoData.toDoItem} onChange={handleChange} placeholder="Add an item to your to-do list"></input>
                            <button type="submit" className="add-btn"><FaPlus className="add-icon" /></button>
                        </div>
                    </form>
                    <ul>
                        {goalData.toDoList.map(({ toDoItem, complete, id }) => (
                            <li className={complete ? 'to-do-item-done' : 'to-do-item'} key={id}>
                                <div className="to-do-actions">
                                    <label htmlFor={toDoItem}> {toDoItem} </label>
                                    <span className="action-btns">
                                        <input type="checkbox" id={toDoItem} checked={complete} onChange={() => toDoItemDone(id, complete)}></input>

                                        <button className="delete-btn" onClick={() => deleteToDoItem(goalId, id)} ><FaTimes /></button>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <label htmlFor="goal-progress" className="small-bold-text">Goal progress: <span className="small-text">{goalData.toDoList.length > 0 ? `You're ${Math.round(value)}% the way there!` : "Get started and add to your to do list"}</span></label>

                    <progress id="goal-progress" value={value} max={100}>{value}</progress>
                </div>
                <div className="goal-footer">
                    {goalData.goalDeadline && <p> <span className="small-bold-text"> I want to achieve it by: </span> {goalData.goalDeadline} </p>}
                    <button className="goal-complete-btn" onClick={() => completeGoal(goalId)}>Mark goal as achieved</button>
                    <button className="delete-goal-btn" onClick={() => deleteGoal(goalId)}>Delete goal</button>
                </div>
            </div>
        </div>

    )
}
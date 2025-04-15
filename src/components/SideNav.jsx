import "/src/styles/side-nav.css"

export default function SideNav({ filterParams, setFilterParams }) {

    function updateFilter(level) {
        if (level === filterParams) {
            setFilterParams(null)
        } else {
            setFilterParams(level)
        }
    }


    return (
        <>
            <div className="side-nav-actions">
                <div className="filter-nav">
                    <h2>Filter by goal level</h2>
                    <div className="goal-levels-filter-btns">
                        <button className={filterParams === "Easy" ? `active-btn` : `goal-level-btn`} onClick={() => updateFilter("Easy")}>Easy</button>
                        <button className={filterParams === "Moderate" ? `active-btn` : `goal-level-btn`} onClick={() => updateFilter("Moderate")}>Moderate</button>
                        <button className={filterParams === "Hard" ? `active-btn` : `goal-level-btn`} onClick={() => updateFilter("Hard")}>Hard</button>
                        <button className={filterParams === "Stretch" ? `active-btn` : `goal-level-btn`} onClick={() => updateFilter("Stretch")}>Stretch</button>
                    </div>
                    <div className="clear-filter-sect">
                        {filterParams && <button className="filter-btn" onClick={() => updateFilter()} >Clear filter</button>}
                    </div>

                </div>



                <div className="theme-nav">
                    <h2>Choose your theme</h2>
                    <div className="theme-btns">
                        <button className="goal-level-btn">Theme 1</button>
                        <button className="goal-level-btn">Theme 2</button>
                        <button className="goal-level-btn">Theme 3 </button>
                        <button className="goal-level-btn">Theme 4</button>
                    </div>
                </div>
            </div>
        </>
    )
}
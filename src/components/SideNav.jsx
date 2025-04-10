import "/src/styles/side-nav.css"

export default function SideNav() {
    return (
        <>



            <h2>Filter by goal level</h2>
            <div className="goal-levels-filter-btns">
                <button className="goal-level-btn">Easy</button>
                <button className="goal-level-btn">Moderate</button>
                <button className="goal-level-btn">Hard</button>
                <button className="goal-level-btn">Stretch</button>
            </div>



            <h2>Choose your theme</h2>
            <div className="theme-btns">
                <button className="goal-level-btn">Theme 1</button>
                <button className="goal-level-btn">Theme 2</button>
                <button className="goal-level-btn">Theme 3 </button>
                <button className="goal-level-btn">Theme 4</button>
            </div>
        </>
    )
}
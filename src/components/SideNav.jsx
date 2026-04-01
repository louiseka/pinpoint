import "/src/styles/side-nav.css";

export default function SideNav({
  filterParams,
  setFilterParams,
  setTheme,
  theme,
  goals,
}) {
  function updateFilter(level) {
    if (level === filterParams) {
      setFilterParams(null);
    } else {
      setFilterParams(level);
    }
  }

  function updateTheme(theme) {
    setTheme(theme);
  }

  return (
    <>
      <div className="side-nav-actions">
        {goals.length > 0 && (
          <div
            className="filter-nav"
            role="group"
            aria-labelledby="filter-heading"
          >
            <h2 id="filter-heading">Filter by goal level</h2>
            <div className="goal-levels-filter-btns">
              <button
                className={
                  filterParams === "Easy" ? `active-btn` : `goal-level-btn`
                }
                onClick={() => updateFilter("Easy")}
                aria-pressed={filterParams === "Easy"}
              >
                Easy
              </button>
              <button
                className={
                  filterParams === "Moderate" ? `active-btn` : `goal-level-btn`
                }
                onClick={() => updateFilter("Moderate")}
                aria-pressed={filterParams === "Moderate"}
              >
                Moderate
              </button>
              <button
                className={
                  filterParams === "Hard" ? `active-btn` : `goal-level-btn`
                }
                onClick={() => updateFilter("Hard")}
                aria-pressed={filterParams === "Hard"}
              >
                Hard
              </button>
              <button
                className={
                  filterParams === "Stretch" ? `active-btn` : `goal-level-btn`
                }
                onClick={() => updateFilter("Stretch")}
                aria-pressed={filterParams === "Stretch"}
              >
                Stretch
              </button>
            </div>
            <div className="clear-filter-sect">
              {filterParams && (
                <button className="filter-btn" onClick={() => updateFilter()}>
                  Clear filter
                </button>
              )}
            </div>
          </div>
        )}

        <div className="theme-nav" role="group" aria-labelledby="theme-heading">
          <h2 id="theme-heading">Choose your theme</h2>
          <div className="theme-btns">
            <button
              className={theme === "theme-a" ? `active-btn` : `theme-btn`}
              onClick={() => updateTheme("theme-a")}
              aria-pressed={theme === "theme-a"}
            >
              Blush
            </button>
            <button
              className={theme === "theme-b" ? `active-btn` : `theme-btn`}
              onClick={() => updateTheme("theme-b")}
              aria-pressed={theme === "theme-b"}
            >
              Aqua
            </button>
            <button
              className={theme === "theme-c" ? `active-btn` : `theme-btn`}
              onClick={() => updateTheme("theme-c")}
              aria-pressed={theme === "theme-c"}
            >
              Evergreen{" "}
            </button>
            <button
              className={theme === "theme-d" ? `active-btn` : `theme-btn`}
              onClick={() => updateTheme("theme-d")}
              aria-pressed={theme === "theme-d"}
            >
              Orange{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

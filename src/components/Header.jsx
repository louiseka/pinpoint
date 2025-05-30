import "/src/styles/header.css"

export default function Header() {

    const countdownDate = new Date("31 December 2025 23:59:59").getTime()
    const todaysDate = new Date().getTime()
    const timeLeft = countdownDate - todaysDate
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

    return (
        <header>
            <div>
                <h1>Pinpoint</h1>
                <p className="description">Pinpoint offers you a dedicated space to clearly define the why and how behind your goals, helping you stay focused, motivated, and intentional throughout your journey.</p>

            </div>
            <p className="countdown"><span className="medium-bold-text">{days}</span> days until 31 December</p>
        </header>
    )
}
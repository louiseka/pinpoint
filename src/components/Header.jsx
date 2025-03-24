import "/src/styles/header.css"

export default function Header() {
    return (
        <header>
            <div>
                <h1>Pinpoint</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt metus vel est</p>
            </div>
            <p className="countdown"><span className="medium-bold-text">235 days</span> until 31 December 2025</p>
        </header>
    )
}
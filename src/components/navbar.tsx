export default function Navbar({openCart}: {openCart: () => void}) {
    return (
        <nav>
            <a className="logo" href="#">
                <img src="assets/snowflake.svg" alt="snowflake logo" width="24" height="24" />
                <h2 className="logo-title action-small">The Gifts</h2>
            </a>
            <div className="links action-small">
                <a href="#" className="menu-item">Gifts</a>
                <a href="#" className="menu-item">About</a>
                <a href="#" className="menu-item">Best</a>
                <a href="#" className="menu-item">Contacts</a>
                <button className="menu-item" onClick={() =>openCart()}>
                    Cart
                </button>
            </div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}
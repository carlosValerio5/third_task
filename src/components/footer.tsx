export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-cards">
                    <div className="footer-card">
                        <img src="assets/santa-claus.svg" alt="santa-claus" />
                        <p className="action-large">+375 (29) 111-22-33</p>
                        <h3 className="header-3">Call Us</h3>
                    </div>
                    <div className="footer-card">
                        <img src="assets/christmas-tree.svg" alt="christmas-tree" />
                        <p className="action-large">Magic forest</p>
                        <h3 className="header-3">meet us</h3>
                    </div>
                    <div className="footer-card">
                        <img src="assets/snake.svg" alt="snake" />
                        <p className="action-large">gifts@magic.com</p>
                        <h3 className="header-3">write us</h3>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="socials">
                        <div className="social-container">
                            <img src="assets/telegram.png" alt="telegram" />
                        </div>
                        <div className="social-container">
                            <img src="assets/facebook.png" alt="facebook" />
                        </div>
                        <div className="social-container">
                            <img src="assets/instagram.png" alt="instagram" />
                        </div>
                        <div className="social-container">
                            <img src="assets/X.png" alt="x-social" />
                        </div>
                    </div>
                    <p className="paragraph">© Copyright 2025, All Rights Reserved</p>
                    <p className="caption">Made in Rolling Scopes School</p>
                </div>
            </div>
        </footer>
    )
}
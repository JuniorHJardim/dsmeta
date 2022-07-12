import logo from '../../assets/img/logo.svg'

import "./styles.css"

function Header() {
    return (
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Fitaflex" />
                <h1>DsMeta</h1>
                <p>desenvolvido por
                    <a href="https://www.instagram.com/dai_jardim/">
                        @devSuperior</a>
                </p>
        </div>

    )
}

export default Header

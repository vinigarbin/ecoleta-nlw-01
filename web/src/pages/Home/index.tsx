import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from '../../assets/logo.svg'

const Home = () => {
    return (
        <div id="page-home">
            <div className="content" >
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <main>
                    <h1>
                        Seu marketplace de coleta de resíduos.
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

                        <Link to="/create-point">
                            <span><FiLogIn /></span>
                            <strong>Cadastre um ponto de coleta</strong>
                        </Link>
                    </h1>
                </main>
            </div>
        </div>
    )
}


export default Home
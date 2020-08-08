import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

import './styles.css'
import api from '../../services/api';
function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect( () => {
        api.get('connections')
        .then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, [] );

    return(
        <div id="page-landing">
            <div id="page-landing-content">
                <main>
                    <div className="logo-container">
                        <img src={logoImg} alt="proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
                    <div className="image-container">
                        <img 
                            src={landingImg} 
                            alt="Plataforma de estudos" 
                            className="hero-image"
                        />
                    </div>
                </main>
                
                <footer>

                    <div className="info">
                        <div className="welcome-message">
                            <span>
                                Seja bem vindo. <br />
                                <strong>O que deseja fazer</strong>
                            </span>
                        </div>

                        <span className="total-connections">
                        { totalConnections }
                        </span>
                    </div>

                    <div className="buttons-container">
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </Link>

                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar aulas"/>
                            Dar aulas
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Landing;
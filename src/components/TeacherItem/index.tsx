import React from "react";

import './styles.css';

import whastappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/8595464?s=460&u=9d6a6a6002946b931a33a569651383ef40a57792&v=4"
          alt="Alison Sousa"
        />

        <div>
          <strong>Alison Sousa</strong>
          <span>Web development</span>
        </div>
      </header>
      <p>
        Web and mobile Programmer
        <br /> <br />
        AI Programmer at SINFO
        <br /> <br />
        I’m currently learning Node, React and React Native technologies.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 75,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
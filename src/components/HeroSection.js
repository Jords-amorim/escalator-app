import React from "react";
// Importação Stylesheet
import "./HeroSection.css";
import "../App.css";
// Importação Componentes
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
        <img src="/images/hero-image.jpg" alt="Imagem de Montanha " />
      <h1> we have ideas to <br></br>growth your business </h1>
      <div className='hero-btns' >
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        SEE NOW
      </Button>

      </div>
      
    </div>
  );
}

export default HeroSection;

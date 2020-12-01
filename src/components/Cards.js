import React from "react";
// Stylesheet
import "./Cards.css";

// Componentes
import CardItem from "./CardItem";


function Cards() {
  return (
    <div className="cards">
      
      <div className="cards__container">    
      
      <h2 className="comp-title">categories</h2>
      <p>discover new possibilities to help you today</p>
          <ul className='cards__items'>
          <CardItem
              src="/images/nature.jpg"
              text="Lorem ipsum dolor sit amet"
              label="nature"
              path="/categories"
            />
            <CardItem
              src="images/daily.jpg"
              text="Praesent tincidunt consectetur diam"
              label="daily"
              path="/categories"
            /> 
            <CardItem
              src="images/together.jpg"
              text="Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum"
              label="together"
              path="/categories"
            />
            <CardItem
              src="images/analysis.jpg"
              text="Duis sollicitudin mauris vitae venenatis aliquet"
              label="analysis"
              path="/categories"
            />
            <CardItem
              src="images/pictures.jpg"
              text="Quisque eu nisl purus"
              label="pictures"
              path="/categories"
            />

          </ul>
      
      
          
            
      </div>
    </div>
  );
}

export default Cards;

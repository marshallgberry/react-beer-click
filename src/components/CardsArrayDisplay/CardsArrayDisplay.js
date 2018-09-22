import React from "react";
import './CardsArrayDisplay.css';



const CardsArrayDisplay = (props) => (

            <div>{props.cardsArr.map(card=>(
              <img onClick={() => props.shuffleImages(card.id)} src={require(`../Cards/Images/${card.img}`)} alt="pic"/>
                ))} 
                </div>
    
);
  export default CardsArrayDisplay;

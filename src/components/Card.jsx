import React from "react";
import "../style/Card.css";

const Card = ({ total }) => {
  return (
    <div className="mt-10 ">
      <div class="card">
        <p class="cookieHeading">Recette total de operateur.</p>
        <p class="cookieDescription">Somme ={total}</p>
      </div>
    </div>
  );
};

export default Card;

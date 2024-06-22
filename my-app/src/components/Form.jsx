import React from "react";
import "../style/Form.css";

export default function Form() {
  return (
    <div className="w-[400px]">
      <div class="form-container">
        <div class="logo-container">Formlaire Client</div>

        <form class="form">
          <div class="form-group">
            <label for="nom">nom</label>
            <input
              type="texte"
              id="nom"
              name="nom"
              placeholder="Enter your nom"
              required=""
            />
            <label for="nom">nom</label>
            <input
              type="texte"
              id="nom"
              name="nom"
              placeholder="Enter your nom"
              required=""
            />
            <label for="nom">nom</label>
            <input
              type="texte"
              id="nom"
              name="nom"
              placeholder="Enter your nom"
              required=""
            />
            <label for="nom">nom</label>
            <input
              type="texte"
              id="nom"
              name="nom"
              placeholder="Enter your nom"
              required=""
            />
          </div>

          <button class="form-submit-btn" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import "../style/Form.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Form({ onFormSubmit, client, setSelectedClient }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: client });

  useEffect(() => {
    reset(client);
  }, [client, reset]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    try {
      let response;
      if (client && client._id) {
        response = await axios.patch(
          `http://localhost:5000/api/client/${client._id}`,
          data
        );
      } else {
        response = await axios.post("http://localhost:5000/api/client", data);
      }

      if (response.data) {
        reset(); // Reset form
        // setSelectedClient = null; // Clear selected client
        onFormSubmit(); // Refresh client list
      } else {
        alert("Erreur d'insertion");
      }
    } catch (error) {
      console.log("Erreur de mise à jour ou d'enregistrement", error);
      alert("Erreur de mise à jour ou d'enregistrement");
    }
  };
  // console.log(setSelectedClie);
  return (
    <div className="w-[400px]">
      <div className="form-container">
        <div className="logo-container">Formulaire Client</div>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="tel"
            >
              Numero téléphone
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="tel"
              {...register("numTel")}
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="nom"
            >
              Nom
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="nom"
              {...register("nom")}
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="sexe"
            >
              Sexe
            </label>
            <select
              name="sexe"
              id="sexe"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...register("sexe")}
            >
              <option value="Masculin">Masculin</option>
              <option value="Féminin">Féminin</option>
            </select>
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="number"
              min={0}
              id="age"
              {...register("age")}
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="solde"
            >
              Solde
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="number"
              min={0}
              id="solde"
              {...register("solde")}
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="email"
              {...register("mail")}
            />
          </div>

          <button className="form-submit-btn" type="submit">
            {client ? "Mettre à jour" : "Enregistrer"}
          </button>
        </form>
      </div>
    </div>
  );
}

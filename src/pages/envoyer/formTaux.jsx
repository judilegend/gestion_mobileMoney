import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormTaux = ({ fetchTaux_env, selectEnvoi }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: selectEnvoi,
  });

  const onSubmit = async (data) => {
    try {
      let response;
      if (selectEnvoi && selectEnvoi._id) {
        response = await axios.patch(
          `http://localhost:5000/api/taux-envoi/${selectEnvoi._id}`,
          data
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/taux-envoi",
          data
        );
      }
      if (response.data) {
        reset(); // Réinitialiser le formulaire après soumission réussie
        fetchTaux_env(); // Appeler une fonction pour rafraîchir les données après ajout
      } else {
        console.error("Failed to add taux:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding taux:", error);
    }
    console.log(data);
  };
  useEffect(() => {
    reset(selectEnvoi);
    console.log(selectEnvoi);
  }, [selectEnvoi, reset]);

  return (
    <div className="bg-white shadow-lg p-6 rounded-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="mt-5">
          <label
            htmlFor="montant1"
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Montant 1
          </label>
          <input
            type="number"
            min={0}
            id="montant1"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            {...register("montant1")}
          />
          <label
            htmlFor="montant2"
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Montant 2
          </label>
          <input
            type="number"
            min={0}
            id="montant2"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            {...register("montant2")}
          />
          <label
            htmlFor="frais"
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Frais
          </label>
          <input
            type="text"
            id="frais"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            {...register("frais_env")}
          />
        </div>

        <button type="submit" className="form-submit-btn">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default FormTaux;

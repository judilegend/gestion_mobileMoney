"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const form = ({ fetchRetrait, retrait }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: retrait });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    try {
      let response;
      if (retrait && retrait._id) {
        response = await axios.patch(
          `http://localhost:5000/api/retrait/${retrait._id}`,
          data
        );
      } else {
        response = await axios.post("http://localhost:5000/api/retrait", data);
      }
      if (response.data) {
        reset(); // Reset form
        // setSelectedClient = null; // Clear selected client

        fetchRetrait(); // Refresh client list
      } else {
        alert("Erreur d'insertion");
      }
    } catch (error) {
      console.log("Erreur lors de la creation post du retrait", error);
      // setError("Erreur lors de la suppression du client");
    }
  };
  useEffect(() => {
    reset(retrait);
  }, [retrait, reset]);

  return (
    <div className="bg-white shadow-lg p-6 rounded-sm w-[400px]">
      <div class="form-container">
        <div class="logo-container">Formulaire table Retrait</div>

        <form class="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="tel"
            >
              Telephone
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="tel"
              {...register("numRecepteur")}
            />

            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="montant"
            >
              Montant
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="montant"
              {...register("montant")}
            />
          </div>

          <button
            class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Retirer
          </button>
        </form>
      </div>
    </div>
  );
};

export default form;

"use client";
import { DatePicker } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const form = ({ fetchEnvoi, envoi }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: envoi });
  const transformData = (data) => {
    return {
      ...data,
      payer_frais_retrait: data.payer_frais_retrait === "oui" ? true : false,
    };
  };
  useEffect(() => {
    reset(envoi);
  }, [envoi, reset]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const transformedData = transformData(data);
    console.log(transformedData);
    try {
      let response;
      if (envoi && envoi._id) {
        response = await axios.patch(
          `http://localhost:5000/api/envoyer/${envoi._id}`,
          transformedData
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/envoyer",
          transformedData
        );
      }
      // console.log();

      if (response.data) {
        reset(); // Reset form
        // setSelectedClient = null; // Clear selected client
        fetchEnvoi(); // Refresh client list
      } else {
        alert("Erreur d'insertion");
      }
    } catch (error) {
      console.log("Erreur de mise à jour ou d'enregistrement", error);
      alert("Erreur de mise à jour ou d'enregistrement");
    }
  };
  return (
    <div className="bg-white shadow-lg p-6 rounded-sm w-[400px]">
      <div class="form-container">
        <div class="logo-container">Formulaire table envoyer</div>

        <form class="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="tel-env"
            >
              Telephone Envoyeur
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="tel-rec"
              {...register("numEnvoyeur")}
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="tel-rec"
            >
              Telephone Recepteur
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="tel-rec"
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
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="date"
              id="date"
              {...register("date")}
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="p_frais_retrait"
            >
              Payer frais retrait
            </label>
            <select
              name="sexe"
              id="p_frais_retrait"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...register("payer_frais_retrait")}
            >
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="raison"
            >
              Raison
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="raison"
              {...register("raison")}
            />
          </div>

          <button
            class="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            type="submit"
          >
            Send
            <svg
              class="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default form;

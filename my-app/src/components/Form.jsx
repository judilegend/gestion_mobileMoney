"use client";
import React from "react";
import "../style/Form.css";
import Axios from "axios"
import {useForm} from "react-hook-form";
import axios from "axios";


export default function Form() {
    const {
        register, handleSubmit, watch, formState: {errors},
    } = useForm();
    const onSubmit = async (data ,e) => {
        e.preventDefault();
        try {
                await axios
                    .post("http://localhost:8080/client/save", data)
                    .then(function (response) {
                        if (response.data) {
                            alert("Insérer avec succès");
                        } else {
                            alert("Erreur d'insertion ...");
                        }
                    });

        } catch (error) {
            console.log("Erreur d'enregistrement...", error);
        }    };

    return (<div className="w-[400px]">
            <div class="form-container">
                <div class="logo-container">Formlaire Client</div>

                <form class="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-5">
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block"
                            htmlFor="tel"
                        >
                            Numero telephone
                        </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            type="text"
                            id="tel"
                            {...register("tel")}
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
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
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
                            id="age"
                            {...register("solde")}
                        />
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block"
                            type="email"
                            htmlFor="email"
                        >
                            Email{" "}
                        </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            type="text"
                            id="email"
                            {...register("email")}
                        />
                    </div>

                    <button class="form-submit-btn" type="submit">
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>);
}

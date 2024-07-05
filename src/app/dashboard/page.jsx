"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import FormTaux from "../../pages/envoyer/formTaux";
import FormRec from "../../pages/envoyer/formRec";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "axios";

const Page = () => {
  const [tauxEnvois, setTauxEnvois] = useState([]);
  const [tauxRecus, setTauxRecus] = useState([]);
  const [selectedEnvoi, setSelectedEnvoi] = useState(null);
  const [selectedRec, setSelectedRec] = useState(null);

  const [total, setTotal] = useState(0);

  const addTaux = async () => {
    fetch("http://localhost:5000/api/taux-envoi")
      .then((response) => response.json())
      .then((data) => setTauxEnvois(data))
      .catch((error) =>
        console.error("Error fetching taux_envoi data:", error)
      );
  };
  const addRec = async () => {
    fetch("http://localhost:5000/api/taux-recep")
      .then((response) => response.json())
      .then((data) => setTauxRecus(data))
      .catch((error) => console.error("Error fetching taux_recu data:", error));
  };
  useEffect(() => {
    // Fetch data for taux_envoi
    addTaux();
    // Fetch data for taux_recu
    addRec();
    RecetteTotal();
  }, []);

  const handleDeleteTaux_env = async (tauxId) => {
    try {
      await axios.delete(`http://localhost:5000/api/taux-envoi/${tauxId}`);
      addTaux();
    } catch (error) {
      console.log("Erreur lors de la suppression du client", error);
      // setError("Erreur lors de la suppression du client");
    }
  };
  const RecetteTotal = async () => {
    try {
      const recette = await axios.get("http://localhost:5000/api/recette");
      setTotal(recette.data);
      console.log(recette.data.recette);
      setTotal(recette.data.recette);
      // console.log(total);
    } catch (error) {
      console.log("On ne peut getter les recette", error);
    }
  };
  const handleDeleteTaux_rec = async (tauxId) => {
    try {
      await axios.delete(`http://localhost:5000/api/taux-recep/${tauxId}`);
      addRec();
    } catch (error) {
      console.log("Erreur lors de la suppression du client", error);
      // setError("Erreur lors de la suppression du client");
    }
  };
  // const test = RecetteTotal.map((item) => console.log(item));
  return (
    <div className="w-full h-screen">
      <div className="w-full grid grid-cols-[300px,1fr] grid-rows-[70px,1fr] h-screen overflow-x-hidden relative">
        <div className="row-span-2">
          <Sidebar />
        </div>
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="col-start-2 row-start-2 px-8">
          <section className="flex w-full relative">
            <main className="w-full h-full flex gap-10 mt-20">
              <section className="flex gap-8">
                <FormTaux fetchTaux_env={addTaux} selectEnvoi={selectedEnvoi} />
                <Table aria-label="Tableau de taux envoi" className="w-[500px]">
                  <TableHeader>
                    <TableColumn>Montant 1</TableColumn>
                    <TableColumn>Montant 2</TableColumn>
                    <TableColumn>Frais envoyer</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {tauxEnvois.map((tauxEnvoi) => (
                      <TableRow key={tauxEnvoi.id}>
                        <TableCell>{tauxEnvoi.montant1}</TableCell>
                        <TableCell>{tauxEnvoi.montant2}</TableCell>
                        <TableCell>{tauxEnvoi.frais_env}</TableCell>
                        <TableCell>
                          <button onClick={() => setSelectedEnvoi(tauxEnvoi)}>
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTaux_env(tauxEnvoi._id)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </section>
              <section className="flex gap-8">
                <FormRec fetchTaux_rec={addRec} recepteur={selectedRec} />
                <Table aria-label="Tableau de taux envoi" className="w-[500px]">
                  <TableHeader>
                    <TableColumn>Montant 1</TableColumn>
                    <TableColumn>Montant 2</TableColumn>
                    <TableColumn>Frais Retrait</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {tauxRecus.map((tauxRecus) => (
                      <TableRow key={tauxRecus.id}>
                        <TableCell>{tauxRecus.montant1}</TableCell>
                        <TableCell>{tauxRecus.montant2}</TableCell>
                        <TableCell>{tauxRecus.frais_rec}</TableCell>
                        <TableCell>
                          <button onClick={() => setSelectedRec(tauxRecus)}>
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTaux_rec(tauxRecus._id)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </section>
            </main>
          </section>
          <Card total={total} />
        </div>
      </div>
    </div>
  );
};

export default Page;

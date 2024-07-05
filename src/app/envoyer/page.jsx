"use client";
import React, { useEffect, useState } from "react";

import FormEnvoyer from "../../pages/envoyer/formEnvoyer";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Operations from "@/components/Operation";
import Card from "@/components/Card";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
const page = ({ fetchClients, clients, error, handleDeleteClient }) => {
  const [envoi, setEnvoi] = useState([]);
  const [selectedEnvoi, setSelectedEnvoi] = useState(null); // State to hold the client to edit

  const fetchEnvoi = async () => {
    fetch("http://localhost:5000/api/envoyer")
      .then((response) => response.json())
      .then((data) => setEnvoi(data))
      .catch((error) =>
        console.error("Error fetching taux_envoi data:", error)
      );
  };
  const handleUpdate = async (envoiId) => {
    try {
      await axios.patch(`http://localhost:5000/api/envoyer/${envoiId}`);
      fetchEnvoi();
    } catch (error) {
      console.log("Erreur lors de la modification du envoi", error);
      // setError("Erreur lors de la suppression du client");
    }
  };
  const handleDeleteEnvoi = async (envoiId) => {
    try {
      await axios.delete(`http://localhost:5000/api/envoyer/${envoiId}`);
      fetchEnvoi();
    } catch (error) {
      console.log("Erreur lors de la creation du envoi", error);
      // setError("Erreur lors de la suppression du client");
    }
  };
  // envoi.map((item) => {
  //   console.log(item.payer_frais_retrait);
  // });
  // console.log(envoi.payer_frais_retrait);
  useEffect(() => {
    fetchEnvoi();
  }, []);
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
          <section className="flex w-full justify-between relative">
            <div className="mt-10 w-full flex justify-between gap-5">
              <Table aria-label="Tableau de clients">
                <TableHeader>
                  <TableColumn>TEL Envoyeur</TableColumn>
                  <TableColumn>TEL Receveur</TableColumn>
                  <TableColumn>MONTANT </TableColumn>
                  <TableColumn>DATE</TableColumn>
                  <TableColumn>PAYER_FRAIS_RETRAIT</TableColumn>
                  <TableColumn>RAISON</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {envoi.map((envoi, id) => (
                    <TableRow key={id}>
                      <TableCell>{envoi.numEnvoyeur}</TableCell>
                      <TableCell>{envoi.numRecepteur}</TableCell>
                      <TableCell>{envoi.montant}</TableCell>
                      <TableCell>{envoi.date}</TableCell>
                      <TableCell>
                        {envoi.payer_frais_retrait ? "oui" : "non"}
                      </TableCell>
                      <TableCell>{envoi.raison}</TableCell>
                      <TableCell>
                        <button onClick={() => setSelectedEnvoi(envoi)}>
                          Edit
                        </button>
                        <button onClick={() => handleDeleteEnvoi(envoi._id)}>
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <FormEnvoyer fetchEnvoi={fetchEnvoi} envoi={selectedEnvoi} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;

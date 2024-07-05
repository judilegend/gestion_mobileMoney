"use client";
import React, { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Operations from "@/components/Operation";
import Card from "@/components/Card";
import FormRetrait from "../../pages/Retrait/formRetrait";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import axios from "axios";
// import { Months } from "../client/data";
const page = ({ clients, error, setSelectedClient, handleDeleteClient }) => {
  const [retrait, setRetrait] = useState([]);
  const [selectedRetrait, setSelectedRetrait] = useState(null); // State to hold the client to edit

  const fetchRetrait = async () => {
    fetch("http://localhost:5000/api/retrait")
      .then((response) => response.json())
      .then((data) => setRetrait(data))
      .catch((error) =>
        console.error("Error fetching taux_envoi data:", error)
      );
  };
  // const handleUpdate = async (retraitId) => {
  //   try {
  //     await axios.patch(`http://localhost:5000/api/retrait/${retraitId}`);
  //     fetchRetrait();
  //   } catch (error) {
  //     console.log("Erreur lors de la modification du retrait", error);
  //     // setError("Erreur lors de la suppression du client");
  //   }
  // };
  const handleDeleteRetrait = async (retraitId) => {
    try {
      await axios.delete(`http://localhost:5000/api/retrait/${retraitId}`);
      fetchRetrait();
    } catch (error) {
      console.log("Erreur lors de la suppression du retrait", error);
      // setError("Erreur lors de la suppression du client");
    }
  };

  // retrait.map((item) => {
  //   console.log(item.payer_frais_retrait);
  // });
  // console.log(retrait);
  useEffect(() => {
    fetchRetrait();
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
                  <TableColumn>Numero Telephone</TableColumn>
                  <TableColumn>MONTANT </TableColumn>
                  <TableColumn>Date de reception</TableColumn>

                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {retrait.map((retrait, id) => (
                    <TableRow key={id}>
                      <TableCell>{retrait.numtel}</TableCell>
                      <TableCell>{retrait.montant}</TableCell>
                      <TableCell>04/07/2024</TableCell>

                      <TableCell>
                        <button onClick={() => setSelectedRetrait(retrait)}>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteRetrait(retrait._id)}
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-col gap-5">
                <FormRetrait
                  fetchRetrait={fetchRetrait}
                  retrait={selectedRetrait}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import Operations from "../../components/Operation";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";
import Navbar from "@/components/Navbar";
import axios from "axios";

const Page = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null); // State to hold the client to edit

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/client/getAll");
      setClients(response.data);
    } catch (error) {
      setError("Erreur lors de la récupération des données");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDeleteClient = async (clientId) => {
    try {
      await axios.delete(`http://localhost:8080/client/delete/${clientId}`);
      //   console.log(clientId);
      fetchClients(); // Refresh the client list after deletion
    } catch (error) {
      console.log("Erreur lors de la suppression du client", error);
      setError("Erreur lors de la suppression du client");
    }
  };

  return (
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
            <Operations
              fetchClients={fetchClients}
              clients={clients}
              error={error}
              setSelectedClient={setSelectedClient}
              handleDeleteClient={handleDeleteClient} // Pass delete function to Operations
            />
            <Form client={selectedClient} onFormSubmit={fetchClients} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;

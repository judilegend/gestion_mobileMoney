"use client";
import React, { useEffect, useState } from "react";
import Operations from "../../components/Operation";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";
import Navbar from "@/components/Navbar";
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import { Select, SelectItem } from "@nextui-org/react";
import { Months } from "./data";
const Page = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null); // State to hold the client to edit

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/client");
      setClients(response.data);
    } catch (error) {
      setError("Erreur lors de la récupération des données");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);
  const searchClient = async (name) => {
    // e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/client/search?name=${name}`
      );
      // setClients(response.data);
      if (response.status === 200) {
        let data = response.data;
        if (!Array.isArray(data)) {
          data = [data]; // Si la réponse n'est pas un tableau, enveloppez-la dans un tableau
        }

        if (data.length === 0 || data[0] === null) {
          setClients([]);
        } else {
          setClients(data);
        }
        setError(null);
        console.log(data);
      } else {
        setClients([]);
        console.log([]);
      }
    } catch (error) {
      setError("Erreur lors de la recherche des données");
    }
  };

  const handleDeleteClient = async (clientId) => {
    try {
      await axios.delete(`http://localhost:5000/api/client/${clientId}`);
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
            <div className="flex flex-col gap-3 justify-end items-end">
              <SearchBar search={searchClient} />
              <Form client={selectedClient} onFormSubmit={fetchClients} />
              <div className="flex gap-5">
                <Select
                  isRequired
                  label="Choisir le mois"
                  placeholder="Select an animal"
                  defaultSelectedKeys={["janvier"]}
                  className="max-w-xs w-[180px]"
                >
                  {Months.map((item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  ))}
                </Select>
                <button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 mr-2 -ml-1"
                  >
                    <path
                      d="M12 4v12m8-8l-8 8-8-8"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  Download pdf
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
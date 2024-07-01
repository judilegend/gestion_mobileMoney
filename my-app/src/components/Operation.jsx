import React from "react";
import Fiche from "./Fiche";

const Operations = ({ fetchClients, clients, error, setSelectedClient, handleDeleteClient }) => {
  return (
      <div>
        <Fiche
            fetchClients={fetchClients}
            clients={clients}
            error={error}
            setSelectedClient={setSelectedClient}
            handleDeleteClient={handleDeleteClient} // Pass delete function to Fiche
        />
      </div>
  );
};

export default Operations;

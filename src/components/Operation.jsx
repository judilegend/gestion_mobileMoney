import React from "react";
import Fiche from "./Fiche";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Operations = ({
  fetchClients,
  clients,
  error,
  setSelectedClient,
  handleDeleteClient,
}) => {
  return (
    <div className="w-full">
      <Table aria-label="Tableau de clients">
        <TableHeader>
          <TableColumn>TEL</TableColumn>
          <TableColumn>NOM</TableColumn>
          <TableColumn>SEXE</TableColumn>
          <TableColumn>AGE</TableColumn>
          <TableColumn>SOLDE</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client._id}>
              <TableCell>{client.numTel}</TableCell>
              <TableCell>{client.nom}</TableCell>
              <TableCell>{client.sexe}</TableCell>
              <TableCell>{client.age}</TableCell>
              <TableCell>{client.solde}</TableCell>
              <TableCell>{client.mail}</TableCell>
              <TableCell>
                <button onClick={() => setSelectedClient(client)}>Edit</button>
                <button onClick={() => handleDeleteClient(client._id)}>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Operations;

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Fiche = ({ clients, error, setSelectedClient, handleDeleteClient }) => {
  return (
    <section className="w-[1100px]">
      {error && <p className="text-red-500">{error}</p>}
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
            <TableRow key={client.id}>
              <TableCell>{client.tel}</TableCell>
              <TableCell>{client.nom}</TableCell>
              <TableCell>{client.sexe}</TableCell>
              <TableCell>{client.age}</TableCell>
              <TableCell>{client.solde}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>
                <button onClick={() => setSelectedClient(client)}>Edit</button>
                <button onClick={() => handleDeleteClient(client.id_client)}>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Fiche;

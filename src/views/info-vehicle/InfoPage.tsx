import { Cards } from "./components/cards/Cards";
import { Table } from "./components/table/Table";
import "./InfoPage.css";

interface Props {
  onSwitch: boolean;
}

const InfoPage = ({ onSwitch }: Props) => {
  return (
    <>
      <section className="content-info">
        {onSwitch ? (
          <Cards
            data={Data}
            titles={["Cliente", "Vehículo", "Convenio", "Placa", "Total"]}
          />
        ) : (
          <Table
            data={Data}
            titles={["Cliente", "Vehículo", "Convenio", "Placa", "Total"]}
          />
        )}
      </section>
    </>
  );
};

export default InfoPage;

const Data: Cliente[] = [
  {
    cliente: "Andres",
    vehiculo: "Chevrollet Corvette",
    convenio: "Colsubsidio",
    placa: "AGY-845",
    total: 150000,
  },
  {
    cliente: "Andres",
    vehiculo: "Chevrollet Corvette",
    convenio: "Colsubsidio",
    placa: "AGY-845",
    total: 150000,
  },
  {
    cliente: "Andres",
    vehiculo: "Chevrollet Corvette",
    convenio: "Colsubsidio",
    placa: "AGY-845",
    total: 150000,
  },
  {
    cliente: "Andres",
    vehiculo: "Chevrollet Corvette",
    convenio: "Colsubsidio",
    placa: "AGY-845",
    total: 150000,
  },
];

interface Cliente {
  cliente: string;
  vehiculo: string;
  placa: string;
  convenio: string;
  total: number;
}

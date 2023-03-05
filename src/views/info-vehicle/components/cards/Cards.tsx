import { Field } from "./Field";
import "./Card.css";

export const Cards = ({ data, titles }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <section className="card animate__animated animate__fadeIn" key={index}>
          <div className="col-card">
            <h1>Información</h1>
            <hr />
            {titles.map((title, index) => (
              <Field
                key={index}
                title={title}
                value={Object.values(item)[index]}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

interface Props {
  titles: string[];
  data: Cliente[];
}

interface Cliente {
  cliente: string;
  vehiculo: string;
  placa: string;
  convenio: string;
  total: number;
}

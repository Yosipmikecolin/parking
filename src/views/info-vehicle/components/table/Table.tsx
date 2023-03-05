import "./Table.css";

export const Table = ({ titles, data }: Props) => {
  return (
    <>
      <section className="container-table">
        <div className="col">
          <h2 className="title">Información</h2>
          <div className="custom-table">
            <thead className="thead">
              <tr className="tr">
                <th className="th">#</th>
                {titles.map((title) => {
                  return (
                    <th className="th" key={title}>
                      {" "}
                      {title}{" "}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => {
                return (
                  <tr className="tr" key={index}>
                    <td className="td">{index + 1}</td>
                    {Object.values(data).map((info, index) => (
                      <td className="td" key={index}>
                        {" "}
                        {info}{" "}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
      </section>
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

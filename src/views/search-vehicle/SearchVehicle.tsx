import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InfoPage from "../info-vehicle/InfoPage";
import ButtonOption from "./components/button-option/ButtonOption";
import StepHeader from "./components/step-header/StepHeader";
import {Button} from "minimal-desing-react"
import "./SearchVehicle.css";

interface Props {
  title: string;
  agreement?: boolean;
  searchVehicle?: boolean;
  exitVehicle?: boolean;
  statistics?: boolean;
}

export const SearchPage = ({
  searchVehicle,
  exitVehicle,
  agreement,
  title,
}: Props) => {
  const [error, setError] = useState<boolean>(false);
  const location = useLocation();
  const [step, setStep] = useState({ step1: true, step2: false });
  const [onSwitch, setonSwitch] = useState<boolean>(false);
  const [options, setOptions] = useState({
    plate: false,
    date: false,
    value: false,
  });

  useEffect(() => {
    setStep({ step1: true, step2: false });
    setOptions({ plate: false, date: false, value: false });
  }, [location.pathname]);

  const nextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (options.plate || options.date || options.value) {
      setError(false);
      setStep({ step1: false, step2: true });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <section className="content">
        <StepHeader
          step={step}
          setStep={setStep}
          setOptions={setOptions}
          setonSwitch={setonSwitch}
          onSwitch={onSwitch}
        />
        {step.step2 ? (
          exitVehicle ? (
            <h1>Factura de salida vehicular</h1>
          ) : (
            <InfoPage onSwitch={onSwitch} />
          )
        ) : (
          <form onSubmit={nextPage}>
            <div className="card">
              <div className="row">
                <div className="col">
                  <h2>{title}</h2>

                  {(searchVehicle || exitVehicle || agreement) && (
                    <ButtonOption
                      label="Placa"
                      setOptions={setOptions}
                      options={options}
                      name="plate"
                    />
                  )}

                  <ButtonOption
                    label="Fecha"
                    setOptions={setOptions}
                    options={options}
                    name="date"
                  />
                  {agreement && (
                    <ButtonOption
                      label="Valor"
                      setOptions={setOptions}
                      options={options}
                      name="value"
                    />
                  )}
                  <hr style={{ marginTop: "1em", marginBottom: "1em" }} />
                  <Button label="Buscar" />
                  {error && (
                    <span style={{ color: "red" }}>Elige una opción</span>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

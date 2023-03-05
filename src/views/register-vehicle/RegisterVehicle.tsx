import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useListForm } from "../../api/queries";
import Button from "../../components/buttons/Button";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import { FormDataSchema, TypeFormData } from "../../schemas/form-schema";
import "./RegisterVehicle.css";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";

const Form = () => {
  const { brands, infring, models, vehicles } = useListForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({
    resolver: zodResolver(FormDataSchema),
    mode: "onBlur",
  });

  const onSubmit = () => {
    alert("vehiculo registrado");
  };
  return (
    <>
      <div className="containerForm">
        <div className="boxLeft">
          <h1>Registra de forma fácil y rápida cualquier vehículo.</h1>
          <div className="mini-box">
            Cada registro de vehículo se almacena de forma segura y encriptada
            en nuestras bases de dados.
          </div>
        </div>
        <div className="boxRight">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registro Vehicular</h1>
            <Controller
              name="plate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input label="Placa" onChange={onChange} value={value} />
                  <ErrorMessage errors={errors} index={"plate"} />
                </>
              )}
            />

            <Controller
              name="motive_immobilization"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    label="Motivo de inmovilización"
                    onChange={onChange}
                    value={value}
                  />
                  <ErrorMessage
                    errors={errors}
                    index={"motive_immobilization"}
                  />
                </>
              )}
            />

            <Controller
              name="kilometer"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input label="Kilometro" onChange={onChange} value={value} />
                  <ErrorMessage errors={errors} index={"kilometer"} />
                </>
              )}
            />

            <Controller
              name="registration_date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    label="Fecha de registro"
                    onChange={onChange}
                    value={value}
                  />
                  <ErrorMessage errors={errors} index={"registration_date"} />
                </>
              )}
            />

            <Controller
              name="brand"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    label="Marcas"
                    data={brands.data ?? []}
                    onChange={onChange}
                    value={value}
                  />
                  <ErrorMessage errors={errors} index={"brand"} />
                </>
              )}
            />
            <Controller
              name="vehicle_type"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    label="Tipo vehículo"
                    data={vehicles.data ?? []}
                    onChange={onChange}
                    value={value}
                  />

                  <ErrorMessage errors={errors} index={"vehicle_type"} />
                </>
              )}
            />
            <Controller
              name="offense_type"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    label="Tipo de infracción"
                    data={infring.data ?? []}
                    onChange={onChange}
                    value={value}
                  />

                  <ErrorMessage errors={errors} index={"offense_type"} />
                </>
              )}
            />

            <Controller
              name="model"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    label="Modelo"
                    data={models.data ?? []}
                    onChange={onChange}
                    value={value}
                  />

                  <ErrorMessage errors={errors} index={"model"} />
                </>
              )}
            />

            <div className="button-form">
              <Button label="Guardar cambios" css={{ marginTop: 20 }} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

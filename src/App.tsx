import IconRegister from "./assets/registro.svg";
import IconSearch from "./assets/buscar.svg";
import IconAgreement from "./assets/convenio.svg";
import IconExit from "./assets/salida.svg";
import IconAnalitic from "./assets/analisis.svg";
import Logo from "./assets/logo.png";
import { QueryClientProvider, QueryClient } from "react-query";

import Form from "./views/register-vehicle/RegisterVehicle";
import { SearchPage } from "./views/search-vehicle/SearchVehicle";
import { Template } from "minimal-desing-react";

function App() {
  const listRoutes = [
    {
      icon: IconRegister,
      patch: "/register",
      element: <Form />,
    },

    {
      icon: IconSearch,
      patch: "/search",
      element: <SearchPage title="Buscar vehiculo" searchVehicle />,
    },

    {
      icon: IconExit,
      patch: "/exit-vehicle",
      element: <SearchPage title="Salida de vehiculo" exitVehicle />,
    },

    {
      icon: IconAgreement,
      patch: "/conventions",
      element: <SearchPage title="Convenios" agreement />,
    },

    {
      icon: IconAnalitic,
      patch: "/statistics",
      element: <SearchPage title="Estadisticas" />,
    },
  ];

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       <Template listRoutes={listRoutes} logo={Logo}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;

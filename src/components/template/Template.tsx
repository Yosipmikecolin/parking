import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "../dashboard/DashBoard";
import Login from "../login/Login";

interface Props {
  listRoutes: {
    icon: string;
    patch: string;
    element: JSX.Element;
  }[];
  avatar?: string;
}

const TemplateLayout = ({ listRoutes, avatar }: Props) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userRegister = localStorage.getItem("user");
    if (userRegister) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("user", "true");
  };

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route
            path="/"
            element={<Login onChange={handleSubmit} setUser={setUser} />}
          />
        ) : (
          <Route
            path="/"
            element={
              <DashBoard
                listRoutes={listRoutes}
                avatar={avatar}
                setUser={setUser}
              />
            }
          >
            {listRoutes.map((item, index) => (
              <Route key={index} path={item.patch} element={item.element} />
            ))}
          </Route>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TemplateLayout;

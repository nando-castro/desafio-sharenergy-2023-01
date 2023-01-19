import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import Cats from "../components/cats/CatsHttp";
import Clients from "../components/clients/Clients";
import Dogs from "../components/dogs/Dogs";
import Users from "../components/users/Users";
import { useAuth } from "../context/auth";

export function Home() {
  const navigate = useNavigate();
  const { logout }: any = useAuth();
  const [selected, setSelected] = useState("");
  let renderTab: any = {
    users: <Users />,
    cats: <Cats />,
    dogs: <Dogs />,
    clients: <Clients />,
  };

  let currentTab: string = selected;

  useEffect(() => {
    if (localStorage.getItem("userLogged") === null) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    const response = window.confirm(
      "Confirme para sair!"
    );

    if (response === true) {
      logout();
    }
  };

  return (
    <main className="h-screen w-full flex justify-center items-center  bg-gradient-to-r from-pink-400  to-blue-600">
      <div className="w-full h-screen flex flex-col md:w-3/5 md:h-4/6 bg-white md:shadow-2xl md:rounded-2xl md:flex-none  md:flex-row">
        <div className="md:w-28 md:h-full flex md:flex-col w-full h-28 flex-row">
          <Card
            text={"Home"}
            radius={"8px 50px 0 0"}
            action={() => setSelected("users")}
          />
          <Card text={"HTTP Cat"} action={() => setSelected("cats")} />
          <Card text={"Random Dog"} action={() => setSelected("dogs")} />
          <Card text={"CRUD Clientes"} action={() => setSelected("clients")} />
          <Card text={"Exit"} radius={"0 0 50px 8px"} action={handleLogout} />
        </div>
        <div className="w-full h-full bg-white rounded-r-lg">
          {currentTab !== "" ? renderTab[currentTab] : <Users />}
        </div>
      </div>
    </main>
  );
}

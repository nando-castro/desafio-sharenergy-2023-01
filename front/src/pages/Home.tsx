import { useState } from "react";
import Card from "../components/card/Card";
import Cats from "../components/cats/CatsHttp";
import Users from "../components/users/Users";

export function Home() {
    const [selected, setSelected] = useState(null);
    let renderTab: any = {
        users: <Users />,
        cats: <Cats />
    };

    let currentTab: string = "cats";

    return <main className="h-screen w-full flex justify-center items-center  bg-gradient-to-r from-blue-300  to-pink-500">
        <div className="w-full h-screen flex flex-col md:w-3/5 md:h-4/6 bg-white md:shadow-2xl md:rounded-2xl md:flex-none  md:flex-row">
            <div className="md:w-28 md:h-full flex md:flex-col w-full h-28 flex-row">
                <Card text={"Home"} radius={"8px 50px 0 0"}/>
                <Card text={"HTTP Cat"} />
                <Card text={"Random Dog"} />
                <Card text={"CRUD Users"} radius={"0 0 50px 8px"}/>
            </div>
            <div className="w-full h-full bg-white rounded-r-lg">
                {currentTab !== null ? renderTab[currentTab] : <Users />}
            </div>
        </div>
    </main>;
}
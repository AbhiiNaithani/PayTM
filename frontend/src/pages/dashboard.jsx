
import { useState } from "react";
import { AppBar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"


export const Dashboard = () => {
    const [users, setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
    },
    {
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 2
    },
    {
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 3
    }]);

    return <div >
        <AppBar/>
        <div className="p-8 ">
            <Balance value={'4000'}/>
            <Users data={users}/>
        </div>
    </div>
}
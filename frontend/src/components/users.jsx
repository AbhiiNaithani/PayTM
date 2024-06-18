import { useEffect, useState } from "react";
import { Button } from "./button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState('');

    const OnFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const GetUsers = async () => {
        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            headers: {
                Authorization : localStorage.getItem('token')
            }
        });
        setUsers([...response.data.user]);
        // console.log(response.data.user);
    }
    
    useEffect(() => {
        GetUsers();
    },[filter]);

    return(
        <div className="py-4">
            <div className="text-lg font-bold">
                Users
            </div>
            <input onChange={OnFilterChange} placeholder="Search users..." className="w-full rounded px-2 py-1 my-2 border border-slate-200"/>
            <div className="py-2">
                {users.map((user) => <User key={user._id} user={user}/>)}
            </div>
        </div>
    )
}

const User = ({user}) => {
    const navigate = useNavigate();

    const SendMoneyHandler = () => {
        navigate(`/send?id=${user._id}&name=${user.firstName}`);
    }
    return(
        <div className="mb-2 shadow py-2 rounded px-2 flex justify-between items-center">
            <div className="flex items-center">
                <div className="rounded-full w-12 h-12 bg-slate-200 text-xl flex justify-center items-center font-medium">
                    {user.firstName[0]}
                </div>
                <div className="ml-4 font-medium">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <div >
                <Button onClick={SendMoneyHandler} label={'Send Money'}/>
            </div>
        </div>
    )
}
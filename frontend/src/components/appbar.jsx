import axios from "axios";
import { useEffect, useState } from "react";

export const AppBar = () => {
    const [user,setUser] = useState({});

    const GetUser = async () => {
        const response = await axios.get(`http://localhost:3000/api/v1/user/details`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        // console.log(response.data.user);
        setUser((u) => response.data.user);

    }

    useEffect(() => {
        GetUser();
    },[])

    return <div className="h-14 shadow flex items-center justify-between pl-4 pr-2">
        <div className="text-lg font-medium">
            PayTM App
        </div>
        <div className="flex items-center">
            <div className="mr-4">
                Hello!
            </div>
            <div className="rounded-full w-12 h-12 bg-slate-200 text-xl flex justify-center items-center font-medium">
                {user.firstName ? user.firstName[0] : 'U'}
            </div>
        </div>
    </div>
}
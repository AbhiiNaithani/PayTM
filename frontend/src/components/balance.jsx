import axios from "axios";
import { useEffect, useState } from "react"

export const Balance = () => {
    const [balance,setBalance] = useState("");

    const GetBalance = async () => {
        const response = await axios.get(`http://localhost:3000/api/v1/account/balance`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        setBalance(response.data.balance);

    }

    useEffect(() => {
        GetBalance();
    },[])
    return (
        <div className="flex  items-center">
            <div className="font-bold text-lg">
                Your balance:
            </div>
            <div className="font-semibold ml-4 text-lg">
                Rs. {balance}
            </div>
        </div>
    )
}
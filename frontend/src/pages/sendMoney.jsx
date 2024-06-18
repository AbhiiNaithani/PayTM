import {  useState } from "react"
import { InputBox } from "../components/inputBox"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const [amount,setAmount] = useState(0);

    const navigate = useNavigate();

    const TransactionHandler = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/account/transfer',{
            to : id,
            amount : amount
        },{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        // console.log(response);
        navigate('/dashboard');

    }
    
    return <div className="flex h-screen bg-slate-200 justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-96">
            <div className="text-center text-3xl font-bold">
                Send Money
            </div>
            <div className="flex items-center mt-14 ">
                <div className="rounded-full w-12 h-12 bg-green-500 text-xl flex justify-center items-center font-medium text-white">
                    {name[0]}
                </div>
                <div className="ml-4 font-medium text-xl">
                    {name}
                </div>
            </div>
            <InputBox onChange={(e) => {
                setAmount(e.target.value);
            }} type={'number'} label={'Amount (in Rs)'} placeholder={'Enter Amount'}/>
            <button onClick={TransactionHandler} className="w-full flex bg-green-500 hover:bg-green-600 s rounded justify-center items-center text-white font-medium px-4 py-2 text-sm mt-4">
                Initiate Transfer
            </button>

        </div>
    </div>
}
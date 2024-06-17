import { Button } from "../components/button"
import { InputBox } from "../components/inputBox"

export const SendMoney = () => {
    return <div className="flex h-screen bg-slate-200 justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-96">
            <div className="text-center text-3xl font-bold">
                Send Money
            </div>
            <div className="flex items-center mt-14 ">
                <div className="rounded-full w-12 h-12 bg-green-500 text-xl flex justify-center items-center font-medium text-white">
                    U
                </div>
                <div className="ml-4 font-medium text-xl">
                    Fiends Name
                </div>
            </div>
            <InputBox label={'Amount (in Rs)'} placeholder={'Enter Amount'}/>
            <button className="w-full flex bg-green-500 hover:bg-green-600 s rounded justify-center items-center text-white font-medium px-4 py-2 text-sm mt-4">
                Initiate Transfer
            </button>

        </div>
    </div>
}
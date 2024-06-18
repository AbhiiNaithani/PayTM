

import { AppBar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"


export const Dashboard = () => {
    

    return <div >
        <AppBar/>
        <div className="p-8 ">
            <Balance/>
            <Users />
        </div>
    </div>
}
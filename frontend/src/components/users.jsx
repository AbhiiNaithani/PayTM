import { Button } from "./button"

export const Users = ({data}) => {
    return(
        <div className="py-4">
            <div className="text-lg font-bold">
                Users
            </div>
            <input placeholder="Search users..." className="w-full rounded px-2 py-1 my-2 border border-slate-200"/>
            <div className="py-2">
                {data.map((user) => <User user={user}/>)}
            </div>
        </div>
    )
}

const User = ({user}) => {
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
                <Button label={'Send Money'}/>
            </div>
        </div>
    )
}
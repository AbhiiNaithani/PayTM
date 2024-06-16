import { Link } from "react-router-dom"

export const BottomWarning = ({label,buttonText,to}) => {
    return <div className="text-sm flex justify-center py-2 font-medium">
        <div>{label}</div>
        <Link className="pointer pl-1 underline cursor:pointer" to={to}>{buttonText}</Link>
    </div>
}
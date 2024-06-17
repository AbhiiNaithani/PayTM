
export const Button = ({label,onClick}) => {
    return <button type="button" onClick={onClick} className={`w-full bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 text-white rounded-lg text-sm font-medium text-center p-2.5 my-2`} >{label}</button>
}
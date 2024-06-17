import { useState } from "react"
import { BottomWarning } from "../components/bottomWarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { SubHeading } from "../components/subHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const SignIn = () => {
    const [username, setUsername] = useState('abhii@gmail.com');
    const [password, setPassword] = useState('123456');

    const navigate = useNavigate();

    const SignInHandler = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        })

        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');

    }

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
    <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
        <Heading label = {'Sign In'}/>
        <SubHeading label = {'Enter your credentials to enter in your account.'}/>
        <InputBox onChange={(e) => {
            setUsername(e.target.value);
        }} value={username} label="Email" placeholder={'abhii@gmail.com'}/>
        <InputBox onChange={(e) => {
            setPassword(e.target.value);
        }} value={password} label="Password" placeholder={'123456'}/>
        <div className="pt-4"> 
            <Button label='Sign In' onClick = {SignInHandler}/>
        </div>
        <BottomWarning label="Don't have an account?" buttonText='Sign Up' to={'/signup'}/>
    </div>
    
</div>
}
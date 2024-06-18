import { useState } from "react"
import axios from 'axios'

import { BottomWarning } from "../components/bottomWarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { SubHeading } from "../components/subHeading"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const [firstName, setFirstName] = useState('A4');
    const [lastName, setLastName] = useState('B4');
    const [username, setUsername] = useState('a4@gmail.com');
    const [password, setPassword] = useState('123456');

    const navigate = useNavigate();

    const SignUpHandler = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            password,
            firstName,
            lastName
        })
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token);
        navigate('/dashboard');
    }
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
            <Heading label = {'Sign Up'}/>
            <SubHeading label = {'Enter your information to create an account.'}/>
            <InputBox onChange={(e) => {
                setFirstName(e.target.value);
            }} type={'text'} value={firstName} label="First Name" placeholder={'John'}/>
            <InputBox onChange={(e) => {
                setLastName(e.target.value);
            }} type={'text'} value={lastName} label="Last Name" placeholder={'Doe'}/>
            <InputBox onChange={(e) => {
                setUsername(e.target.value);
            }} type={'text'} value={username} label="Email" placeholder={'abhi@gmail.com'}/>
            <InputBox onChange={(e) => {
                setPassword(e.target.value);
            }} type={'text'} value={password} label="Password" placeholder={'123456'}/>
            <div className="pt-4"> 
                <Button label='Sign Up' onClick={SignUpHandler}/>
            </div>
            <BottomWarning label='Already have an account?' buttonText='Sign In' to={'/signin'}/>
        </div>
        
    </div>
}
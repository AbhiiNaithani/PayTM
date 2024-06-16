import { BottomWarning } from "../components/bottomWarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { SubHeading } from "../components/subHeading"

export const SignUp = () => {
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
            <Heading label = {'Sign Up'}/>
            <SubHeading label = {'Enter your information to create an account.'}/>
            <InputBox label="First Name" placeholder={'John'}/>
            <InputBox label="Last Name" placeholder={'Doe'}/>
            <InputBox label="Email" placeholder={'abhi@gmail.com'}/>
            <InputBox label="Password" placeholder={'123456'}/>
            <div className="pt-4"> 
                <Button label='Sign In' onClick = {() => console.log('Signing in...')}/>
            </div>
            <BottomWarning label='Already have an account?' buttonText='Sign In' to={'/signin'}/>
        </div>
        
    </div>
}
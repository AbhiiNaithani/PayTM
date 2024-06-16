import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Dashboard } from './pages/dashboard';
import { SendMoney } from './pages/sendMoney';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/signin' element = {<SignIn/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/send' element = {<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

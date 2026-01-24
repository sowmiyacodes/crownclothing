import {Routes,Route,Outlet} from 'react-router-dom'

import Home from "./routes/home/home.component.jsx";
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/sign-in.jsx';
const Shop = ()=>
{
  return(
    <div>
    <h1>This is the shop page</h1>
  </div>
  )
  
}

function App() {
  return (
    <Routes>
      <Route path = '/' element= {<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path = 'shop' element = {<Shop/>}/>
        <Route path = 'sign-in' element = {<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;

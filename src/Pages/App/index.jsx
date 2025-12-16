import Home from '../Home/index.jsx'
import SignIn from "../SignIn/index.jsx";
import MyOrder from '../MyOrder/index.jsx'
import MyOrders from '../MyOrders/index.jsx'
import MyAccount from '../MyAccount/index.jsx'
import NotFound from '../NotFound/index.jsx'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import '../../App.css'
import {NavBar} from "../../components/NavBar/index.jsx";

const AppRoutes=()=>{
    let routes= useRoutes([
        {path:'/', element:<Home/>},
        {path:'/my-account', element:<MyAccount/>},
        {path:'/my-order', element:<MyOrder/>},
        {path:'/my-orders', element:<MyOrders/>},
        {path:'/*', element:<NotFound />},
        {path:'/sign-in', element:<SignIn/>}
    ])

    return routes
}

function App() {

  return (
   <BrowserRouter>
       <AppRoutes />
       <NavBar/>
   </BrowserRouter>
  )
}

export default App

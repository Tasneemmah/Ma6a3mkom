import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
//-----------------------------user-------------------------------//
import NavListMenu from "./components/user/NavListMenu"
import Footer from "./components/user/Footer"
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import PaymentPage from './pages/user/PaymentPage';
import Home from "./pages/user/Home"
import About from "./pages/user/About"
import ContactUs from './pages/user/ContactUs';
import ProfilePage from './pages/user/ProfilePage'
import ServicePage from './pages/user/ServicePage';
import ServicePageAll from './pages/user/ServicePageAll';
import Details from './pages/user/Details';
import EditProfile from './pages/user/EditProfile';
//----------------------------------------------------------------//

//------------------------ Restaurants----------------------------//
import RestaurantProfile from './pages/restaurants/RestaurantProfile';
import RestaurantHome from './pages/restaurants/RestaurantHome';




//---------------------------------------------------------------//


//----------------------------admin------------------------------//
import Sidebar from './pages/admin/dashboard/Sidebar';
import NavListMenuD from './pages/admin/dashboard/NavDashboard'
import MainDashboard from './pages/admin/MainDashboard';
import ListUser from './pages/admin/ListUser'
import ListRestaurant from './pages/admin/ListRestaurant';
import Chat from './pages/admin/Chat';
import EditAboutContact from './pages/admin/EditAboutContact';
import AcceptTables from './pages/admin/AcceptTables';
//---------------------------------------------------------------//

import React, { useEffect, useState ,useContext } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext';

function App() {

const [role000 ,setRole000] =useState()

const { routs,updateRouts } = useContext(UserContext)
const { SignStatus,updateSignStatus } = useContext(UserContext)

const [hideRouterUser, setHideRouterUser] = useState(false );
const [hideRouterAdmin, setHideRouterAdmin] = useState( true);
const [hideRouterRestaurants, setHideRouterRestaurants] = useState(true);



useEffect(() => {

  if(localStorage.roles != null){
    let roles = JSON.parse(localStorage.roles)
    let status = localStorage.SignStatus
    setHideRouterUser(roles[0])
    setHideRouterAdmin(roles[1])
    setHideRouterRestaurants(roles[2])
    updateRouts(roles)
   }



  

  
  

  
  



}, []);




  //-----------------------------User Router-------------------------------//
  const AppRouterUser = () => {
    const  [currentTable , setCurrentTable] = useState({})

    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<Home />} />
             <Route path="About" element={<About />} />
             <Route path='ContactUs' element={<ContactUs/>}/>
             <Route path="SignIn" element={<SignIn />} />
             <Route path="SignUp" element={<SignUp />} />
             <Route path="PaymentPage" element={<PaymentPage />} />
             <Route path="ProfilePage"  element={<ProfilePage  />} />
             <Route path="ServicePageAll" element={<ServicePageAll setCurrentTable={setCurrentTable} />} />
             <Route path="/Details/:restaurant_id" element={<Details currentTable={currentTable} />} />
             <Route path="EditProfile" element={<EditProfile />} />
             <Route path="/restaurants/:type_food" element={<ServicePage />} />
        </Routes>
        <Footer/>
      </Router>
     
    );
  };

//----------------------------Admin Router------------------------------//
  const AppRouterAdmin = () => {
    return (
      
      <Router>
        <Sidebar />
       <div style={{width:"100%"}}>
       <NavListMenuD/>
        <Routes>        
        <Route index element={<MainDashboard />} />
        <Route path="ListUser" element={<ListUser />} />
        <Route path="ListRestaurant" element={<ListRestaurant />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="EditAboutContact" element={<EditAboutContact />} />
        <Route path="AcceptTables" element={<AcceptTables />} />
        </Routes>
        </div>
      </Router>
     
    );
  };

//------------------------ Restaurants Router----------------------------//
  const AppRouterRestaurants = () => {
    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<RestaurantHome />} />
             <Route path="profile/:id" element={<RestaurantProfile />} />

        </Routes>
      </Router>
     
    );
  };

  return (
 <>
 
    {hideRouterUser ? null : (
      <>
        <AppRouterUser />
      </>
    )}
   {hideRouterAdmin ? null : (
      <>
        <div className='flex'>
        <AppRouterAdmin />
        </div>
      </>
    )}

{hideRouterRestaurants ? null : (
      <>
        <AppRouterRestaurants />
      </>
    )}
 </>
  );
}

export default App;

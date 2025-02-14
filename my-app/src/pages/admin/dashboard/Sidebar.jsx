import "./sidebar.css"
import Icon from '@mdi/react';
import { mdiSilverwareForkKnife } from '@mdi/js';
import { mdiAccountMultipleOutline } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { UserContext } from '../../../UserContext';
import React,{useState,useEffect,useContext} from "react";
import { mdiTableFurniture } from '@mdi/js';

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

  export default function Sidebar() {
    const { SignStatus,updateSignStatus } = useContext(UserContext)

function handleLogOut(){


  Swal.fire({
    title: ` logout?  `,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    icon: 'warning'
}
).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

        Swal.fire(`  done `, '', 'success');
     
        updateSignStatus("signUp")
        localStorage.setItem("SignStatus","signUp")
        localStorage.removeItem("auth");
        localStorage.removeItem("roles");
        window.location.href = 'http://localhost:3000/';
      

    } else
        Swal.fire(' Cancelled', '', 'error')

})

}


    return (
      <Card className=" min-h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 Sidebar ">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
          dashboard
          </Typography>
        </div>
        <List>

          <Link to='/'>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Statistics
          </ListItem>
          </Link>

           <Link to='/ListUser'>
          <ListItem>
            <ListItemPrefix>
            <Icon path={mdiAccountMultipleOutline} size={1} />
            </ListItemPrefix>
            Users list
          </ListItem>
          </Link>

          <Link to='/ListRestaurant'>
          <ListItem>
            <ListItemPrefix>
            <Icon path={mdiSilverwareForkKnife} size={1} />

            </ListItemPrefix>
             Restaurants List
          </ListItem>
          </Link>

          <Link to='/EditAboutContact'>
          <ListItem>
            <ListItemPrefix>
            <Icon path={mdiInformationOutline} size={1} />
            </ListItemPrefix>
             Edit About
          </ListItem>
          </Link>

          <Link to='/AcceptTables'>
          <ListItem>
            <ListItemPrefix>
            <Icon path={mdiTableFurniture} size={1} />
            </ListItemPrefix>
            Pending Tables
          </ListItem>
          </Link>

         <Link to='/Chat'>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          </Link>

{/* 
         <Link to="UserProfile">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          </Link> */}

          {/* <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
            </Link> */}
           <button onClick={handleLogOut}>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
          </button>
        </List>
      </Card>
    );
  }
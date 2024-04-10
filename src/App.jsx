import React from 'react';
import ReactDOM  from 'react-dom/client';

import SearchPageMobile from './components/Header Components/SearchPage/SearchPageMobile';

import SetLocationMobile from './components/Header Components/SetLocationPage/SetLocationMobile';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';

import { useMediaQuery } from "react-responsive";
import HeaderMobile from './components/Header/HeaderMobile';
import HeaderDesktop from './components/Header/HeaderDesktop';
import UserPageMobile from './components/Header Components/UserPage/UserPageMobile';
import Body from './components/Body/Body';
import RestaurantPage from './components/Body Components/Restaurant Page Components/RestaurantPage';


const AppLayout = () =>{
  const isMobile = useMediaQuery( {maxWidth:639} );
  return isMobile?
  (
    <div>
      <HeaderMobile />
      <Body />
      
      
      
    </div>
  )  
  :  
  (
    <div>
      <HeaderDesktop />
      <Outlet /> 
    </div>
  )
     
};

const appRouter = createBrowserRouter([
 
  
  
  {
    path: '/',
    element : <AppLayout/>,
    children:[

      {
        path:'/',
        element:<Body/>
      },
      {
        path :'/restaurants-desktop/:restaurantID',
        element: <RestaurantPage/>
      }
      

    ]      
  },
  {
    path:'/searchpagemobile',
    element : <SearchPageMobile />
  },

  {
    path: '/setlocationmobile',
    element : <SetLocationMobile/>
  },

  {
    path: '/userpagemobile',
    element : <UserPageMobile/>
  },

  {
    path: '/body',
    element: <Body/>
  },
  
  {
    path : '/restaurants-mobile/:restaurantID',
    element: <RestaurantPage/>
  }   
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
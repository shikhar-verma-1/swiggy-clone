import React from 'react';
import ReactDOM  from 'react-dom/client';
//import HeaderMain from './components/Header/HeaderMain';
import SearchPageMobile from './components/SearchPage/SearchPageMobile';
//import Body from './components/Body';
import SetLocationMobile from './components/SetLocationPage/SetLocationMobile';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
//import SearchPage from './components/SearchPage/SearchPage';
import { useMediaQuery } from "react-responsive";
import HeaderMobile from './components/Header/HeaderMobile';
import HeaderDesktop from './components/Header/HeaderDesktop';
import UserPageMobile from './components/UserPage/UserPageMobile';
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
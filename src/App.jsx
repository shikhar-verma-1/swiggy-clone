import React from 'react';
import ReactDOM  from 'react-dom/client';
//import HeaderMain from './components/Header/HeaderMain';
import SearchPageMobile from './components/SearchPage/SearchPageMobile';
import Body from './components/Body';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
//import SearchPage from './components/SearchPage/SearchPage';
import { useMediaQuery } from "react-responsive";
import HeaderMobile from './components/Header/HeaderMobile';
import HeaderDesktop from './components/Header/HeaderDesktop';
const AppLayout = () =>{
  const isMobile = useMediaQuery( {maxWidth:480} );
  return isMobile?(
      <div>
        <HeaderMobile/>
      </div>
  ):(
    <div>
      <HeaderDesktop/>
      <Body/>
      
    </div>
  )
     
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,   
    },
    {
        path:'/searchpagemobile',
        element : <SearchPageMobile />
    },
    {
      path:'/Body',
      element : <Body />
    }
   
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
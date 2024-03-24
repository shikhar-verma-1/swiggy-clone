import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header/Header';

import SearchPage from './components/SearchPage/SearchPage';
import Body from './components/Body';
import Comp from './components/SearchPage/SearchPageMobile';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';


const AppLayout = () =>{
   
  return(
    <div>
        <Header/>
        
    </div>
  )
     
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,   
    },
    {
        path:'/searchpage',
        element : <SearchPage/>
    },
    {
      path:'/Body',
      element : <Body/>
    }
   
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
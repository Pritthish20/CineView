import React from 'react'
import { Outlet } from 'react-router';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navigation from './pages/Auth/navigation';


const App = () => {
  return (
    <>
      <ToastContainer/>
      <Navigation/>
      <main className='py-3'>
        <Outlet/>
      </main>
    </>
    
  )
}
export default App;

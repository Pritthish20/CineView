import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import {Route,RouterProvider,createRoutesFromElements } from 'react-router'
import {createBrowserRouter} from 'react-router-dom'



//auth

import  AdminRoute  from './pages/Admin/AdminRoute.jsx'
import  GenreList  from './pages/Admin/GenreList.jsx'


//restricted
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import PrivateRoute from './pages/Auth/PrivateRoutes.jsx'


import Home from './pages/Home.jsx'
import Profile from './pages/User/Profile.jsx'
import  CreateMovie  from './pages/Admin/CreateMovie.jsx'
import  AdminMovieList  from './pages/Admin/AdminMovieList.jsx'
import  UpdateMovie  from './pages/Admin/UpdateMovie.jsx'
import  AllMovies  from './pages/Movies/AllMovies.jsx'
import  MovieDetails  from './pages/Movies/MovieDetails.jsx'
import  AllComents  from './pages/Admin/AllComents.jsx'
import  AdminDashboard  from './pages/Admin/Dashboard/AdminDashboard.jsx'


const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
         <Route index={true} path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/movies' element={<AllMovies/>} />
         <Route path='/movies/:id' element={<MovieDetails/>}/>

         <Route path='' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
         </Route>

         <Route path='' element={<AdminRoute/>}>
            <Route path='/admin/movies/genre' element={<GenreList/>}/>
            <Route path='/admin/movies/create' element={<CreateMovie/>}/>\
            <Route path='/admin/movies-list' element={<AdminMovieList/>}/>
            <Route path='/admin/movies/update-movie/:id' element={<UpdateMovie/>}/>
            <Route path='/admin/movies/comments' element={<AllComents/>}/>
            <Route path='/admin/movies/dashboard' element={<AdminDashboard/>}/>
         </Route>
         
         </Route>   
    )
)



createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)

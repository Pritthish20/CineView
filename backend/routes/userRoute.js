import express from 'express';

// controllers 
import {createUser,loginUser,logOutCurrentUser,getAllUsers,getProfile,updateProfile} from '../controllers/userController.js';
// middleware
import {authenticate,authenticateAsAdmin} from '../middlewares/authMiddleware.js';

const userRoute=express.Router();

userRoute.route('/').post(createUser).get(authenticate,authenticateAsAdmin,getAllUsers);

userRoute.post('/auth',loginUser)
userRoute.post('/logout',logOutCurrentUser)

userRoute.route('/profile',getProfile).get(authenticate,getProfile).put(authenticate,updateProfile)



export default userRoute;
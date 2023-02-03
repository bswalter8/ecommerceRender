import express from 'express';
import passport from 'passport';
import {upload} from './upoladImg.js'
import {checkAuthentication} from './auth.js'
import {auth,soloAdmins} from './loginController.js'
import { 
    postLogin,
    getFailLogin,
    postSignup,
    createCart,
    createUserRole,
    checkAdmin,
    isUploadImg,

        } from './loginController.js'



        const { Router } = express;
        const userRouter = new Router();

  

        userRouter.get('/isAdmin', auth,soloAdmins,checkAdmin);

        //LOGIN


        userRouter.post('/login', passport.authenticate('login', {
            failureRedirect: '/faillogin',
           
        }), postLogin);


        userRouter.get('/faillogin', getFailLogin);

        

        //SIGNUP



        userRouter.post('/signup', passport.authenticate('signup', {
           // failureRedirect: '/failsignup'
           failureMessage: true,
            
        }),  createCart, createUserRole, postSignup);


        //LOGOUT
    //    userRouter.get('/logout', getLogout);

export {userRouter}
import React, { Component } from "react";
import {Route,Redirect} from "react-router-dom"
import Cookies from 'universal-cookie';
export const PrivateRoutes = ({component: Component,authed, ...rest}) => {
    return(
        <Route
        {...rest}
        render={props =>{
           
            const cookies = new Cookies();
           if(cookies.get('loggedIn')){
               return <Component {...props} />
           } 
           else{
               return <Redirect to={
                   {
                       pathname:"/"
                   }
               }/>
           }

        }}
        
        />
    )
}

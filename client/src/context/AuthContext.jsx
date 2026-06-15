import { createContext, useContext , useState } from 'react';

const AuthContext = createContext();

export const AuthProvide = ({Children }) =>{
    const [user,setUser] =useState(JSON.parse(localStorage.getItem('user')) || null );
    const [token,setToken]= useState(localStorage.getItem('token') || null );
    

    const login = (userData, tokenData)=>{
        setUser(userData);
        setToken(tokenData);
        localStorage.setItem('user',JSON.stringify(userData));
        localStorage.setItem('token',tokenData);
    };

    const logout = ()=>{
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }


    return  (
    <AuthContext.Provider value= {{ user, token, login, logout }}>
        {Children} 
        </AuthContext.Provider> 
    );
     
};

export const usueAuth = ()=> useContext(AuthContext);

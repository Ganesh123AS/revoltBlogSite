import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, SetCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async(inputs) => {
        const res = await axios.post("http://localhost:5000/login", inputs)
        SetCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        await axios.post("http://localhost:5000/logout")
        SetCurrentUser(null)
    };

    const userRole = async () => {
        
        const res = await axios.get("http://localhost:5000/login/role")
        console.log("user role", res)
        SetCurrentUser(res.data)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, userRole }}> {children} </AuthContext.Provider>
    )
}
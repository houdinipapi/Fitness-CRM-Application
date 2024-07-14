"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import axios from "axios";


interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        checkAuth();
    }, [])

    const login = () => {
        setIsAuthenticated(true);
    };

    // const logout = () => {
    //     setIsAuthenticated(false);
    //     localStorage.removeItem("access");
    //     localStorage.removeItem("refresh");
    // };

    const logout = async () => {
        const refreshToken = localStorage.getItem("refresh");
        if (refreshToken) {
            try {
                // console.log(refreshToken)
                await axios.post("http://127.0.0.1:8000/api/logout/", {
                    refresh: refreshToken,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("access")}`
                    }
                });
                setIsAuthenticated(false);
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
            } catch (error) {
                console.error("Failed to logout:", error);
            }
        }

        // try {
        //     const accessToken = localStorage.getItem("access");
        //     const refreshToken = localStorage.getItem("refresh");

        //     if (!accessToken || !refreshToken) {
        //         console.log("No access or refresh token found!")
        //         return;
        //     } else {
        //         console.log("Access Token: ", accessToken);
        //         console.log("Refresh Token: ", refreshToken);
        //     }

        //     const response = await axios.post("http://127.0.0.1:8000/api/logout/", {
        //         refresh: refreshToken,
        //     }, {
        //         withCredentials: true,
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${accessToken}`,
        //         },
        //     });
        //     if (response.status === 200) {
        //         console.log("user has been logged out!")
        //         setIsAuthenticated(false);
        //         localStorage.removeItem("access");
        //         localStorage.removeItem("refresh");
        //         // clearCookies();
        //         window.location.href = "/";
        //     }
        // } catch (error: any) {
        //     console.error("Failed to logout:", error);
        //     if (error.response) {
        //         console.error("Error response:", error.response.data)
        //     }
        // }
    };

    const checkAuth = () => {
        const access = localStorage.getItem("access");
        setIsAuthenticated(!!access);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};
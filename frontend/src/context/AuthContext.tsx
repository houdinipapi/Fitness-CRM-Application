"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";


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

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    };

    const checkAuth = () => {
        const access = localStorage.getItem("access");
        setIsAuthenticated(!!access);
    }

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
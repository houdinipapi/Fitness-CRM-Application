// "use client"

// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
// import axios from "axios";
// import { useAuth } from './AuthContext';

// interface ProfileContextType {
//     profile: any;
//     loading: boolean;
//     error: string;
//     updateProfile: (data: any) => Promise<void>
// }


// const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// export const ProfileProvider = ({ children }: { children: ReactNode }) => {
//     const { isAuthenticated } = useAuth();
//     const [profile, setProfile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         if (isAuthenticated) {
//             axios.get("http://127.0.0.1:8000/api/profile", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("access")}`
//                 }
//             })
//             .then(response => {
//                 setProfile(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError("Failed to load profile!");
//                 setLoading(false);
//             });
//         } else {
//             setLoading(false);
//             setError("You need to be logged in to view this page!");
//         }
//     }, [isAuthenticated]);

//     const updateProfile = async (data: any) => {
//         try {
//             const response = await axios.put("http://127.0.0.1:8000/api/profile",
//                 data,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("access")}`
//                     },
//                 }
//             );

//             if (response.status === 200) {
//                 setProfile(response.data);
//             }
//         } catch (error) {
//             setError("Failed to update profile!");
//         }
//     };

//     return (
//         <ProfileContext.Provider value={{ profile, loading, error, updateProfile }}>
//             {children}
//         </ProfileContext.Provider>
//     );

// };

// export const useProfile = () => {
//     const context = useContext(ProfileContext);
//     if (!context) {
//         throw new Error("useProfile must be used within a ProfileProvider");
//     }
//     return context;
// };
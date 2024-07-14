// "use client"

// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "./AuthContext";


// interface ProfileContextType {
//     userProfile: any;
//     fetchProfile: () => void;
//     updateProfile: (profileData: any) => void;
// }


// const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
//     const [userProfile, setUserProfile] = useState<any>(null);

//     const fetchProfile = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("access")}`
//                 }
//             });
//             setUserProfile(response.data);
//         } catch (error) {
//             console.error("Failed to fetch profile:", error);
//         }
//     };

//     const updateProfile = async (profileData: any) => {
//         try {
//             const response = await axios.put("http://127.0.0.1:8000/api/profile/", profileData, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("access")}`
//                 }
//             });
//             setUserProfile(response.data);
//         } catch (error) {
//             console.error("Failed to update profile:", error);
//         }
//     };

//     useEffect(() => {
//         fetchProfile();
//     }, []);

//     return (
//         <ProfileContext.Provider value={{ userProfile, fetchProfile, updateProfile }}>
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
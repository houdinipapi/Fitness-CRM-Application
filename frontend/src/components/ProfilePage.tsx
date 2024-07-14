// "use client"

// import React, { useEffect, useState } from "react";
// import { useProfile } from "@/context/ProfileContext";


// const ProfilePage = () => {
//     const { userProfile, updateProfile } = useProfile();
//     const [formData, setFormData] = useState({
//         first_name: "",
//         last_name: "",
//         username: ""
//     });

//     useEffect(() => {
//         if (userProfile) {
//             setFormData({
//                 first_name: userProfile.first_name || "",
//                 last_name: userProfile.last_name || "",
//                 username: userProfile.username || ""
//             });
//         }
//     }, [userProfile]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         updateProfile(formData);
//     };

//     return (
//         <div className="container">
//             <h1>Profile</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="first_name">First Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="first_name"
//                         name="first_name"
//                         value={formData.first_name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="last_name">Last Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="last_name"
//                         name="last_name"
//                         value={formData.last_name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="username"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit">
//                     Update Profile
//                 </button>

//             </form>
//         </div>
//     );
// };

// export default ProfilePage;
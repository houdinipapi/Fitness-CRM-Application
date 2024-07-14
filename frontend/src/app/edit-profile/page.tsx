import React, { useState } from 'react';
// import { useProfile } from '@/context/ProfileContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ProfileEditPage = () => {
//   const { profile, loading, error } = useProfile();
//   const [formData, setFormData] = useState(profile || {});
//   const [updateError, setUpdateError] = useState('');
//   const router = useRouter();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.put(
//         'http://127.0.0.1:8000/api/profile/',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access')}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         router.push('/profile');
//       }
//     } catch (error) {
//       setUpdateError('Failed to update profile');
//     }
//   };

  return (
    <div>
      <h1>Edit Profile</h1>
      {/* {updateError && <p>{updateError}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name || ''}
            onChange={handleChange}
          />
        </label>
        <br /> */}
        {/* <button type="submit">Save</button>
      </form> */}
    </div>
  );
};

export default ProfileEditPage;

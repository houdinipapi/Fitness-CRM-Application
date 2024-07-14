
import React from 'react';
// import { useProfile } from '@/context/ProfileContext';
import Link from 'next/link';

const ProfilePage = () => {
    // const { profile, loading, error } = useProfile();

    // if (loading) {
    //     return (
    //         <div>
    //             <p>Loading...</p>
    //         </div>
    //     );
    // }

    // if (error) {
    //     return (
    //         <div>
    //             {error}
    //         </div>
    //     );
    // }

    return (
        <div>
            {/* {profile && ( */}
                <div className="container">
                    <div>
                        <h1>Profile</h1>
                        <p>Username: </p>
                        <p>Email: </p>
                        <p>First Name: </p>
                        <p>Last Name: </p>
                        <Link href="/edit-profile">
                            <button>Edit Profile</button>
                        </Link>
                    </div>
                </div>
            {/* )} */}
        </div>
    );
};

export default ProfilePage;

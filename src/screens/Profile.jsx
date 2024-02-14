// src/components/Profile.js
import { useSelector } from 'react-redux';
import Logout from './Logout';
const Profile = () => {
    const { username, jwtToken, round, role } = useSelector((state) => state.users);

    if (!username) {
        // User is not logged in, handle accordingly (e.g., redirect to login page)
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <div>
            <p>Username: {username}</p>
            <p>JWT Token: {jwtToken}</p>
            <p>Round: {round}</p>
            <p>Role: {role}</p>
            <Logout />
        </div>
    );
};

export default Profile
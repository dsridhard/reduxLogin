// src/components/Logout.js
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/usersSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Perform any additional cleanup (e.g., clear local storage, redirect, etc.)
    // ...

    // Dispatch the clearUser action
    dispatch(clearUser());
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
 
export default Logout
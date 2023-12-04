import React, { useContext, useEffect } from 'react';
import UserContext from '../../../contexts/uresContext'; // Corrected typo in import
import * as eventService from '../../../servises/eventService'; // Corrected typo in import

const Logout = ({ handleRemoveUserSession }) => {
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Assuming eventService.logout is an asynchronous operation
        await eventService.logout(accessToken);
        handleRemoveUserSession();
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle error if necessary
      }
    };

    logoutUser();
  }, [accessToken, handleRemoveUserSession]);

  return <div>Logging out...</div>; // Placeholder content during the logout process
};

export default Logout;

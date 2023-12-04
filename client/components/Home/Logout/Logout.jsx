import React, { useContext, useEffect } from 'react';
import UserContext from '../../../contexts/uresContext'; 
import * as eventService from '../../../servises/eventService'; 

const Logout = ({ handleRemoveUserSession }) => {
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    const logoutUser = async () => {
      try {
       
        await eventService.logout(accessToken);
        handleRemoveUserSession();
      } catch (error) {
        console.log('Logout failed:', error);
      
      }
    };

    logoutUser();
  }, [accessToken, handleRemoveUserSession]);

 
};

export default Logout;

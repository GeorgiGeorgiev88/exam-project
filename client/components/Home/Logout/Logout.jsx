import { useContext, useEffect } from 'react';
import UserContext from '../../../contexts/uresContext'; 
import * as eventService from '../../../servises/eventService'; 
import { useNavigate } from 'react-router-dom';

const Logout = ({ handleRemoveUserSession }) => {
  const { accessToken } = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    
    const logoutUser = async () => {
      try {
       
        await eventService.logout(accessToken);
        handleRemoveUserSession();
      } catch (error) {
        navigate('/404')
        console.log('Logout failed:', error);
      
      }
    };

    logoutUser();
  }, [accessToken, handleRemoveUserSession]);

 
};

export default Logout;

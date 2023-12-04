import { useContext } from 'react';
import UserContext from '../../../contexts/uresContext';
import * as eventService from '../../../servises/eventService';



const Logout = ({ handleRemoveUserSession }) => {

    const { accessToken } = useContext(UserContext);
    eventService.logout(accessToken);
    
    handleRemoveUserSession()
};

export default Logout
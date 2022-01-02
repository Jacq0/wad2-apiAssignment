import React, {useContext} from "react";
import { AuthContext } from "../contexts/authContext";

const ProfilePage = (props) =>{
    const context = useContext(AuthContext);
    const { history } = props;

return (
    <><h1>Hello {context.userName}</h1>
    <p>This is your profile page!</p>
    <button onClick={() => context.signout()}>Sign out</button></>
    
  );
};

export default ProfilePage;
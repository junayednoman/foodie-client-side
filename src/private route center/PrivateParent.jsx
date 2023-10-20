import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateParent = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const path = location.pathname;
    const message = 'Please, login to visit the private page';
    const stateInfo = {path, message};

    if (loading) {
        return <div className="h-[50vh] flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    else if (user) {
        return children;
    }
    return <Navigate state={stateInfo} to='/signIn'></Navigate>
};

export default PrivateParent;
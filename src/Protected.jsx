import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = ({ isLoggedIn, children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            return navigate("/");
        }
    },[])
    
    return children;
};

export default Protected;

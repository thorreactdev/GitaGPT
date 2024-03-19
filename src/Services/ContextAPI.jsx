import { createContext  , useState, useEffect } from "react";
import { BASE_URL } from "../Services/Url"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[userdata , setUserdata] = useState("");
    const[token , setToken] = useState(localStorage.getItem("token"));
    console.log(token);
    console.log(userdata);

    const storeToken = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token" , serverToken)
    }

    const isLoggedin = !!token

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    }

    const userAuthentication = async (token) => {
        try{
            const response = await fetch(`${BASE_URL}/api/auth/user`,{
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`,
                }
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setUserdata(data[0][0]);
                console.log(response);
            }else{
                console.log("hello");
            }
        }catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
        userAuthentication(token);
    },[token]);

    return(
        <AuthContext.Provider value={{ userdata, isLoggedin , storeToken , userAuthentication , LogoutUser , token}}>
            {children}
        </AuthContext.Provider>
    )

};